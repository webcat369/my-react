import React, { useState, useEffect } from 'react'
import Board from '@/page/Board'
import './index.scss'

const Game = () => {
  const [ history, setHistory ] = useState<any[]>(() => [])
  const [ pages, setPages ] = useState(1)
  const getList = () => {
    let list = [
      {
        square: Array(9).fill(null),
      },
    ]
    setHistory(list)
  }

  useEffect(() => {
    getList()
    console.log('修改', history)
  }, [])


  return (
    <div className="game">
      <div className="game-board">
        {
          <Board/>
        }
      </div>
      <div className="game-info">
        <div></div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}


export default Game
