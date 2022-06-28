import * as React from 'react';
import styles from './Title.module.less';
import { Typography } from 'antd';
import { TitleProps } from 'antd/lib/typography/Title';
import { SqColors, SqTitleTypes } from '@/style/types';
const TitleAntd = Typography.Title;

type Props = TitleProps & {
  sqTitle?: SqTitleTypes;
  sqColor?: SqColors;
  className?: string;
}

export const Title: React.FC<Props> = ({ children, sqTitle = '', sqColor = 'sq-gray-9', className, ...rest }) => {
  return (
    <TitleAntd
      {...rest}
      className={[styles.text, styles[sqTitle], styles[sqColor], className].join(' ')}
    >
      {children}
    </TitleAntd>
  );
};
