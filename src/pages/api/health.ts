import constants from "@/shared/constants";
import { NextApiResponse } from "next";

const handleHealth = (_, res: NextApiResponse) => {
  res.status(constants.statusCodes.OK).json({ status: "OK" });
};

export default handleHealth;
