import * as React from 'react';
import { Form as AntForm, FormProps } from 'antd';

// ! cant get this to work!

interface IProps extends FormProps {
  children: React.ReactNode;
}

export const Form: React.FC<IProps> = (props) => <AntForm {...props} />
// export const Form: React.forwardRef<IProps> = (props) => <AntForm {...props} />

// const Form = (props: FormProps) => <AntForm {...props} />;
// export const Form = (props: IProps) => <AntForm {...props} />;

// ? trying to copy antd Form.d.ts:
// export const Form:
//   <Values = any>(props: FormProps<Values> & { children: React.ReactNode; })
// // => <AntForm<Values> {...props} /> = (props) => <AntForm {...props} />; 
// => <AntForm {...props} /> = (props) => <AntForm {...props} />; 


// extend antd form: