import React, { useState } from 'react'
import Square from '@/page/Square'
import './index.scss'

const Board = () => {
  const [ val, setVal ] = useState(3)
  return (
    <div className='border'>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
  )
}

export default Board
