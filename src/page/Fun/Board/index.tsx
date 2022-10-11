import React, { useState, useEffect, useMemo } from 'react'
import Square from '@/page/Fun/Square'
import './index.scss'
interface Props {
  squares: string[],
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick:Function
}
const Board = (props:Props) => {
  // const { squares, onClick } = props
  const rowSquares = useMemo(() => [ props.squares.slice(0, 3), props.squares.slice(3, 6), props.squares.slice(6) ], [ props.squares ])

  const handleBtn = (val:number) => {
    console.log('参数', val)
  }

  return (
    <div className='border'>
      {rowSquares.map((row, rowIdx) => (
        <div key={rowIdx} className="board-row clearfix">
          {row.map((item, index) => {
            const i = rowIdx * 3 + index
            const row = rowIdx + 1
            const col = index + 1
            return (
              <Square
                key={index}
                value={item}
                onClick={() => props.onClick(i, row, col)}
                initData={handleBtn}
              ></Square>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Board
