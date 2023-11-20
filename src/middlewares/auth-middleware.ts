import { errorHandler } from "@/shared/utils/error-handler";
import { isTokenValid, parseJwt } from "@/shared/utils/jwt";
import { IncomingMessage, ServerResponse } from "http";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

interface MiddlewareWorkerProps {
  context: GetServerSidePropsContext;
  middlewareResult?: any;
  token?: string;
}

interface ICallback {
  callback: (
    context: GetServerSidePropsContext,
    token: string,
  ) => Promise<GetServerSidePropsResult<any>>;
}

const igroneFetch = true;

class Authorization {
  private token: string;
  private refreshToken: string;
  private nowUnix = (+new Date() / 1e3) | 0;
  static instance: Authorization;

  constructor() {
    this.token = null;
    this.refreshToken = null;
    this.middleware = this.middleware.bind(this);
    this.middlewareWorker = this.middlewareWorker.bind(this);
    this.validationTokens = this.validationTokens.bind(this);
    this.updateTokens = this.updateTokens.bind(this);
    this.clearTokens = this.clearTokens.bind(this);
  }

  createInstance() {
    return new Authorization();
  }

  static getInstance(): Authorization {
    if (!Authorization.instance) {
      Authorization.instance = new Authorization();
    }
    return Authorization.instance;
  }

  private clearTokens = (res: ServerResponse<IncomingMessage>) => {
    console.log("[Auth middleware] Tokens is not valid! Clear cookies!");

    res.setHeader("Set-Cookie", [
      `token=deleted; Max-Age=0; path=/`,
      `refreshToken=deleted; Max-Age=0; path=/`,
      `rf_token=deleted; Max-Age=0; path=/`,
    ]);
  };

  private updateTokens = async (
    res: ServerResponse<IncomingMessage>,
    _refreshToken: string,
  ) => {
    if (igroneFetch) return;
    let _token = null;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/auth/refresh`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${_refreshToken}`,
          },
          method: "POST",
        },
      );

      if (response?.status !== 200) throw new Error("Refresh token error");
      const data = await response.json();
      const { token } = data;
      const access_token_decoded = parseJwt(token);
      const maxAge = access_token_decoded.exp - this.nowUnix;

      if (!!token) {
        console.log("[Auth middleware] Access token update success!");
        _token = token;
        res.setHeader(
          "Set-Cookie",
          `token=${token}; Max-Age=${maxAge}; Path=/`,
        );
        return;
      }

      console.log("[Auth middleware] status is not 200!");
      this.clearTokens(res);
    } catch (e) {
      errorHandler(
        "[Auth middleware] Access token update failed! Catch error!",
        e,
      );
    }

    this.token = _token;
  };

  private validationTokens = async (context: GetServerSidePropsContext) => {
    const { req, res } = context;

    let _token = null;
    let _refreshToken = null;

    let response = {
      props: {
        token: null,
      },
    };

    if (!req) {
      console.error("No req in context");
      return response;
    }

    _token = req.cookies?.token;
    _refreshToken = req.cookies?.refreshToken;

    let tokenIsValid = isTokenValid(_token);
    const refreshTokenIsValid = isTokenValid(_refreshToken);

    if (!tokenIsValid) {
      if (!refreshTokenIsValid) {
        _token = null;
        _refreshToken = null;
        this.clearTokens(res);
        return;
      }

      _token = await this.updateTokens(res, _refreshToken);
    }

    this.token = _token;
    this.refreshToken = _refreshToken;

    return response;
  };

  private middlewareWorker = async (
    { context, middlewareResult = { props: null } }: MiddlewareWorkerProps,
    ...callbacks
  ) => {
    const next = callbacks.shift();
    const responseCb = await next(context);

    middlewareResult = {
      ...middlewareResult,
      ...responseCb,
      props: {
        ...middlewareResult?.props,
        ...responseCb?.props,
      },
    };

    if (callbacks.length) {
      return await this.middlewareWorker(
        { context, middlewareResult },
        ...callbacks,
      );
    } else {
      return middlewareResult;
    }
  };

  middleware =
    ({ callback }: ICallback) =>
    async (context: GetServerSidePropsContext) => {
      let response = await this.middlewareWorker(
        { context },
        this.validationTokens,
        async (context: GetServerSidePropsContext) => {
          return await callback(context, this.token);
        },
      );

      if (!this.refreshToken) {
        return {
          redirect: {
            destination: "/sign-in",
            permanent: false,
          },
        };
      }

      response = {
        ...response,
        props: { ...response?.props, token: !!response?.props?.token },
      };

      return response;
    };
}

const authMiddleware = Authorization.getInstance();
export default authMiddleware;
