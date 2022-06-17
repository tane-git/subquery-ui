// cant figure how to extend Antd Typography.Text properly, so using seperate component for now...
// forked from github.com/subquery/react-ui

import * as React from 'react';
import styles from './Text.module.less';
import { Typography } from 'antd';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
const ParagraphAntd = Typography.Paragraph;

type Props = ParagraphProps & {
  sqType?: SqTextTypes;
  sqColor?: string;
  className?: string;
}

export const Paragraph: React.FC<Props> = ({ children, sqType = 'body', sqColor = 'gray-9', className, ...rest }) => {
  return (
    <ParagraphAntd
      {...rest}
      className={[styles.text, styles[sqType], styles[sqColor], className].join(' ')}
    >
      {children}
    </ParagraphAntd>
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
