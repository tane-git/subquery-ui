import React, { FC } from "react";
import { Button as AntButton, ButtonProps } from "antd";
import styles from './Button.module.less';

// const Button = (props: ButtonProps) => <AntButton {...props} />;
interface SqButtonProps extends ButtonProps {
  sqType?: SqButtonTypes;
}

type SqButtonTypes = 'publish'
  | 'options'
  | 'neutral'

export const Button: FC<SqButtonProps> = ({
  sqType = 'none',
  type = 'primary',
  shape = 'round',
  className,
  ...rest
}) => (
  <AntButton
    type={type}
    shape={shape}
    className={[styles[sqType], className].join(' ')}
    {...rest}
  />
)