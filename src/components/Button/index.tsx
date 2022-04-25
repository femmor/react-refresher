import React, {FC} from 'react'
import {ButtonProps} from './interface'
import './style.css'

const Button: FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <button type='button' className={type} onClick={onClick}>{children}</button>
  )
}

export default Button