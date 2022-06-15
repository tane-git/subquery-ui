// cant figure how to extend Antd Typography.Text properly, so using seperate component for now...
// forked from github.com/subquery/react-ui

import * as React from 'react';
import styles from './style.module.less';
import { Typography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';
const TextAntd = Typography.Text;

type Props = TextProps & {
  type?: SqTextTypes;
  className?: string;
}

export const Text: React.FC<Props> = ({ children, type = 'body', className, ...rest }) => {
  return (
    <TextAntd
      className={[styles.text, styles[type], className].join(' ')}
      {...rest}
    >
      {children}
    </TextAntd>
  );
};

// * Subquery Design System:
type SqTextTypes = 'large'
  | 'largeSemiBold'
  | 'body'
  | 'bodyMedium'
  | 'medium'
  | 'small' 
  | 'extraSmall'
