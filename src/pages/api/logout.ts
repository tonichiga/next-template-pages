import constants from "@/shared/constants";
import { NextApiRequest } from "next";

const logout = async (req: NextApiRequest, res: any) => {
  try {
    res
      .setHeader("Set-Cookie", [
        `token=deleted; Max-Age=0; path=/`,
        `refreshToken=deleted; Max-Age=0; path=/`,
        `sessionTimestamp=deleted; Max-Age=0; path=/`,
        `rf_token=deleted; Max-Age=0; Path=/`,
      ])
      .status(constants.statusCodes.OK)
      .send({ message: "Logout success" });
  } catch (e) {
    res
      .setHeader("Set-Cookie", [
        `token=deleted; Max-Age=0; path=/`,
        `refreshToken=deleted; Max-Age=0; path=/`,
        `sessionTimestamp=deleted; Max-Age=0; path=/`,
        `rf_token=deleted; Max-Age=0; Path=/`,
      ])
      .status(constants.statusCodes.BAD_REQUEST)
      .send({ message: "Logout error" });
  }
};

export default logout;
