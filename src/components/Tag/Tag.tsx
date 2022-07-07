// export { Tag } from 'antd'

import { FC } from "react";
import { Tag as TagAntd, TagType } from "antd";
import style from './Tag.module.less';

export type SqTagType = 'success' |
  'process' |
  'error' |
  'warning' |
  'waiting'

export interface TagProps extends TagType {
  sqType?: SqTagType
}

export const Tag: FC<TagProps> = ({
  sqType = 'success',
  ...props
}) => {
  return (
    <TagAntd
      className={[style.sqTag, style[sqType]].join(' ')}
      {...props}
    />
  )
}