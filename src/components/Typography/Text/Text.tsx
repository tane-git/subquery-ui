// cant figure how to extend Antd Typography.Text properly, so using seperate component for now...
// forked from github.com/subquery/react-ui

import * as React from 'react';
import styles from './Text.module.less';
import { Typography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';
import { SqColors, SqTextTypes } from '@/style/types';
const TextAntd = Typography.Text;

type Props = TextProps & {
  sqType?: SqTextTypes;
  sqColor?: SqColors;
  className?: string;
}

export const Text: React.FC<Props> = ({ children, sqType = 'body', sqColor = 'sq-gray-9', className, ...rest }) => {
  return (
    <TextAntd
      {...rest}
      className={[styles.text, styles[sqType], styles[sqColor], className].join(' ')}
    >
      {children}
    </TextAntd>
  );
};