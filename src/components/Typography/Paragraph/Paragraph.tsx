// cant figure how to extend Antd Typography.Text properly, so using seperate component for now...
// forked from github.com/subquery/react-ui

import * as React from 'react';
import styles from './Paragraph.module.less';
import { Typography } from 'antd';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
// import { SqColors, SqTextTypes } from '@/style/types/index';
import { SqColors, SqTextTypes } from '../types';
const ParagraphAntd = Typography.Paragraph;

type Props = ParagraphProps & {
  sqType?: SqTextTypes;
  sqColor?: SqColors;
  className?: string;
}

export const Paragraph: React.FC<Props> = ({ children, sqType = 'body', sqColor = 'sq-gray-9', className, ...rest }) => {
  return (
    <ParagraphAntd
      {...rest}
      className={[styles.paragraph, styles.text, styles[sqType], styles[sqColor], className].join(' ')}
    >
      {children}
    </ParagraphAntd>
  );
};