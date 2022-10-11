/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'
import './index.scss'

interface Props {
  value?:number|string|null,
  onClick:Function,
  initData:Function
}

const Square = (props:Props) => {
  const handleBtn = () => {
    props.initData(1)
  }
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}

export default Square
