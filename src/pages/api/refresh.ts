import { NextApiRequest, NextApiResponse } from "next";
import { parseJwt } from "@/shared/utils/jwt";
import { errorHandler } from "@/shared/utils/error-handler";
import constants from "@/shared/constants";

const refresh = async (req: NextApiRequest, res: NextApiResponse) => {
  const { cookies, headers } = req;
  delete headers.host;
  const nowUnix = (+new Date() / 1e3) | 0;
  const refreshToken = cookies?.refreshToken;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/auth/refresh`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
        method: "POST",
      },
    );

    if (response?.status !== constants.statusCodes.OK) {
      console.log(
        "[API Next]",
        "Refresh token error",
        response.status,
        response.statusText,
      );
      res.send({ message: "error refresh" });
    }
    const data = await response.json();

    const access_token_decoded = parseJwt(data.token);
    const maxAge = access_token_decoded?.exp - nowUnix;

    if (!!data.token) {
      console.log("[API Next] Access token update success!");

      res
        .setHeader(
          "Set-Cookie",
          `token=${data.token}; Max-Age=${maxAge}; Path=/`,
        )
        ?.status(constants.statusCodes.OK)
        ?.send({ message: "refresh success", token: data.token });
    } else {
      console.log("[API Next] Access token update failed!");

      res
        .setHeader("Set-Cookie", [
          `token=deleted; Max-Age=0; path=/`,
          `refreshToken=deleted; Max-Age=0; path=/`,
        ])
        .status(constants.statusCodes.BAD_REQUEST)
        .send({ message: "refresh failed" });
    }
  } catch (e: any) {
    errorHandler("[API Next] refresh catch", e);
    console.log("Cath error", e);
    res.status(constants.statusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: "error refresh" });
  }
};

export default refresh;
