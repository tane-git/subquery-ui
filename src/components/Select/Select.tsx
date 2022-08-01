import { Select as SelectAntd, SelectProps } from 'antd'
import { FC } from 'react'

export const Select: FC<SelectProps> = (props) => {
  return (
    <SelectAntd
      getPopupContainer={(trigger) => trigger.parentNode}
      {...props}
    />
  )
}