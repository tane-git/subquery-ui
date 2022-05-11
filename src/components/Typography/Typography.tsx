import { Typography as AntTypograhpy, TypographyProps } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';
import style from './style.module.less';

const { Text } = AntTypograhpy;

// interface SqTextProps extends  TextProps {
//   sq: SqText
// }

// const sqText: React.ForwardRefRenderFunction<HTMLSpanElement, SqTextProps> = (props, ref) => {
// const sqText = (sq: string) => {
//   return(
//     <Text className={style[sq]}/>
//   )
// }

// ? how do you create an interface extending the type of something
// interface sqTextProps extends typeof Text {
//   sq: String;
// }



const sqText: sqTextProps = (props) => {
  return(
    <Text className={style[props.sq]}/>
  )
}

export type SqTypographyProps = typeof AntTypograhpy & {

}

const Typography = AntTypograhpy 
Typography.Text = sqText

export { Typography }

// Subquery Design System:
type SqText = 'large'
  | 'largeSemiBold'
  | 'body'
  | 'bodyMedium'
  | 'medium'
  | 'small' 