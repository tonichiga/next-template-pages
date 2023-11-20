import s from "./bullet.module.scss";
import { classes } from "@/shared/utils";

const Title = ({ text, type, className = "" }) => {
  return <p className={classes(s[`type-${type}`], className)}>{text}</p>;
};

export default Title;
