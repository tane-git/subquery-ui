// cant figure how to extend Antd Typography.Text properly, so using seperate component for now...
// forked from github.com/subquery/react-ui

import * as React from 'react';
import styles from './style.module.less';

type Props = {
  type?: SqTextTypes;
  className?: string;
} & React.HTMLProps<HTMLParagraphElement>;

export const Text: React.FC<Props> = ({ children, type = 'body', className, ...rest }) => {
  return (
    <p {...rest} className={[styles.text, styles[type], className].join(' ')}>
      {children}
    </p>
  );
};

// Subquery Design System:
type SqTextTypes = 'large'
  | 'largeSemiBold'
  | 'body'
  | 'bodyMedium'
  | 'medium'
  | 'small' 
