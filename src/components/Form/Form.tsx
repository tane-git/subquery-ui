import * as React from 'react';
import { Form as AntForm, FormProps } from 'antd';

interface IProps extends FormProps {
  children: React.ReactNode;
}

// export const Form: React.FC<IProps> = (props) => <AntForm {...props} />
// export const Form: React.forwardRef<IProps> = (props) => <AntForm {...props} />

// const Form = (props: FormProps) => <AntForm {...props} />;
export const Form = (props: IProps) => <AntForm {...props} />;