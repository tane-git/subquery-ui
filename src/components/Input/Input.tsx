import { Input as InputAntd, InputProps } from 'antd'
import { FC } from 'react'

export const Input: FC<InputProps> = (props) => {
  return (
    <InputAntd
      autoComplete='off'
      {...props}
    />
  )
}