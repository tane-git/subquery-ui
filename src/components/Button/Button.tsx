import React, { FC } from "react";
import { Button as AntButton, ButtonProps } from "antd";

// const Button = (props: ButtonProps) => <AntButton {...props} />;

const Button: FC<ButtonProps> = ({
  type = 'primary',
  shape = 'round',
  ...props
}) => <AntButton type={type} shape={shape} {...props}  />;

export { Button };
