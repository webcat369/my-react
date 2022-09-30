import React from 'react'
import './index.scss'

const Square = () => {
  const changeBtn = () => {
    console.log('你好')
  }

  return (
    <button className="square" onClick={() => changeBtn()}>
    </button>
  )
}

export default Square
