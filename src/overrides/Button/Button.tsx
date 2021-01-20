import React, { FC } from "react";
import {
  default as MatButton,
  ButtonProps as MatButtonProps,
} from "@material-ui/core/Button";

export interface ButtonProps extends MatButtonProps {}

/**
 * Primary interaction item
 */
const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <MatButton {...props}>{children}</MatButton>;
};

export default Button;
