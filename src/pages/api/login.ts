import { NextApiRequest, NextApiResponse } from "next";
import { parseJwt } from "@/shared/utils/jwt";
import { errorHandler } from "@/shared/utils/error-handler";
import { generateRandomString } from "@/shared/utils/string-generator";
import constants from "@/shared/constants";

const handlerLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { headers, body } = req;
  delete headers.host; // Remove host from headers
  const nowUnix = (+new Date() / 1e3) | 0;
  const id = generateRandomString(16);

  const clientIP = req.headers["x-real-ip"] || req.socket.remoteAddress;
  const clientPort = req.headers["x-remote-port"] || req.socket.remotePort;
  const userAgent = req.headers["x-user-agent"] || req.headers["user-agent"];

  const payload = {
    email: body.email,
    password: body.password,
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          "x-client-real-ip": String(clientIP),
          "x-client-remote-port": String(clientPort),
          "x-client-user-agent": String(userAgent),
        },
      },
    );

    if (!response.ok) {
      const _data = await response.json();
      res.status(response.status).send(_data);
      errorHandler(
        "[API Next] Login response error",
        response.status + " " + response.statusText,
      );
      return;
    }

    const data = await response.json();
    const { refreshToken, token, user } = data;

    const access_token_decoded: { exp: number } = parseJwt(token) as any;
    const refresh_token_decoded: { exp: number } = parseJwt(
      refreshToken,
    ) as any;

    const maxAgeAccessToken = access_token_decoded.exp - nowUnix;
    const maxAgeRefreshToken = refresh_token_decoded.exp - nowUnix;

    res.setHeader("Set-Cookie", [
      `token=${token}; Max-Age=${maxAgeAccessToken}; Path=/`,
      `refreshToken=${refreshToken}; Max-Age=${maxAgeRefreshToken}; Path=/; HttpOnly=true`,
      `rf_token=${id}; Max-Age=${maxAgeRefreshToken}; Path=/`,
    ]);

    res.status(constants.statusCodes.OK).send(user);
  } catch (e: any) {
    errorHandler("[API Next] Login error", e);
    res
      .status(constants.statusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal next error" });
  }
};

export default handlerLogin;
