// cant figure how to extend Antd Typography.Text properly, so using seperate component for now...
// forked from github.com/subquery/react-ui

import * as React from 'react';
import styles from './Text.module.less';
import { Typography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';
const TextAntd = Typography.Text;

type Props = TextProps & {
  sqType?: SqTextTypes;
  sqColor?: SqColors;
  className?: string;
}

export const Text: React.FC<Props> = ({ children, sqType = 'body', sqColor = 'gray-9', className, ...rest }) => {
  return (
    <TextAntd
      {...rest}
      className={[styles.text, styles[sqType], styles[sqColor], className].join(' ')}
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

type SqColors = 'gray-9'
  | 'gray-8'
  | 'gray-7'
  | 'gray-6'
  | 'gray-5'
  | 'gray-4'
  | 'gray-3'
  | 'gray-2'
  | 'gray-1'
  | 'primary-blue-1'
  | 'primary-blue-2'
  | 'primary-blue-3'
  | 'primary-blue-4'
  | 'primary-blue-5'
  | 'primary-blue-6'
  | 'primary-pink-1'
  | 'primary-pink-2'
  | 'primary-pink-3'
  | 'primary-pink-4'
  | 'primary-pink-5'
  | 'primary-pink-6'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'

