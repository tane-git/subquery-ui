// export { Tag } from 'antd'

import { FC } from "react";
import { Tag as TagAntd, TagProps as TagAntdProps } from "antd";
import style from './Tag.module.less';

export type SqTagType = 'success' |
  'process' |
  'error' |
  'warning' |
  'waiting'

export interface TagProps extends TagAntdProps {
  sqType?: SqTagType
  children?: React.ReactNode
}

export const Tag: FC<TagProps> = ({
  sqType = 'success',
  children,
  ...props
}) => {
  return (
    <TagAntd
      className={[style.sqTag, style[sqType]].join(' ')}
      children={children}
      {...props}
    />
  )
}