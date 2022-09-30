import React, { useState } from 'react'
import Square from '@/page/Square'
import './index.scss'

const Board = () => {
  const [ val, setVal ] = useState(3)
  return (
    <div>
      <div className="board-row">
        {/* <Square/> */}
      </div>
      <div className="board-row">
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
      </div>
    </div>
  )
}

export default Board
