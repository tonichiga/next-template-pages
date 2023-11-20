import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { parseJwt } from "@/shared/utils/jwt";
import constants from "@/shared/constants";
import { generateRandomString } from "@/shared/utils/string-generator";
import { errorHandler } from "@/shared/utils/error-handler";
import { IUser } from "@/types/user";

interface ILoginBody {
  data: {
    token: string;
    refreshToken: string;
    user: IUser;
  };
}

const hanlderRegistration = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const nowUnix = (+new Date() / 1e3) | 0;
  const { headers, body } = req;
  delete headers.host; // Remove host from headers
  const id = generateRandomString(16);
  const clientIP = req.headers["x-real-ip"] || req.socket.remoteAddress;
  const clientPort = req.headers["x-remote-port"] || req.socket.remotePort;
  const userAgent = req.headers["x-user-agent"] || req.headers["user-agent"];

  try {
    const { data }: ILoginBody = await axios.post(
      `${process.env.PROD_EXTERNAL_API_URL}auth/email/register`, // Node.js backend path
      body, // Login body (email + password)
      {
        headers: {
          "Content-Type": "application/json",
          "x-client-real-ip": clientIP,
          "x-client-remote-port": clientPort,
          "x-client-user-agent": userAgent,
        },
      },
    );
    const { token, refreshToken, user } = data;

    const access_token_decoded: { exp: number } = parseJwt(token);
    const refresh_token_decoded: { exp: number } = parseJwt(refreshToken);
    const maxAgeAccessToken = access_token_decoded.exp - nowUnix;
    const maxAgeRefreshToken = refresh_token_decoded.exp - nowUnix;

    res.setHeader("Set-Cookie", [
      `token=${token}; Max-Age=${maxAgeAccessToken}; Path=/`,
      `refreshToken=${refreshToken}; Max-Age=${maxAgeRefreshToken}; Path=/; HttpOnly=true`,
      `rf_token=${id}; Max-Age=${maxAgeRefreshToken}; Path=/`,
    ]);

    res.send(user);
  } catch (e: any) {
    errorHandler("[API Next] error in register", e);
    res
      .status(e?.response?.status || constants.statusCodes.BAD_REQUEST)
      .send(e.response.data);
  }
};

export default hanlderRegistration;
