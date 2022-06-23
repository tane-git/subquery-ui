import React, { FC } from "react";
import { Button as AntButton, ButtonProps } from "antd";
import styles from './Button.module.less';

// const Button = (props: ButtonProps) => <AntButton {...props} />;
interface SqButtonProps extends ButtonProps {
  sqType?: string;
}

export const Button: FC<SqButtonProps> = ({
  sqType = 'none',
  type = 'primary',
  shape = 'round',
  ...rest
}) => (
  <AntButton
    type={type}
    shape={shape}
    className={styles[sqType]}
    {...rest}
  />
)