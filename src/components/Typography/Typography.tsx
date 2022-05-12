// ! NEED HELP WITH THIS FILE
// I cant figure out how to easily extend the Text component to add our own design system

import { Typography as AntTypograhpy, TypographyProps } from 'antd';
// import { TextProps } from 'antd/lib/typography/Text';
import style from './style.module.less';

const { Text } = AntTypograhpy;

// ? WHAT do I want to do ?
// * Import AntD Typography and then extend the type of the Text component
// * so that it can take the additional prop of 'sq' which will apply our styles.

type SqText = typeof Text & {
  sq: SqTextTypes
}

const sqText = (sqTextType: SqTextTypes, children: string) => {
  return <Text className={style[sqTextType]} children={children} />
}

type SqTypographyProps = TypographyProps & {
  SqText: typeof sqText;
}

const Typography = AntTypograhpy as SqTypographyProps
Typography.SqText = sqText

export { Typography }

// Subquery Design System:
type SqTextTypes = 'large'
  | 'largeSemiBold'
  | 'body'
  | 'bodyMedium'
  | 'medium'
  | 'small' 