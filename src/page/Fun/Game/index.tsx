import React, { useState, useEffect, useMemo } from 'react'
import Board from '@/page/Fun/Board'
import Move from '@/page/Fun/Move'
import './index.scss'

function calculateWinner (squares:string[]) {
  const lines = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [ a, b, c ] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

const Game = () => {
  const [ history, setHistory ] = useState([
    {
      square: Array(9).fill(null),
    },
  ])
  const [ stepNumber, setStepNumber ] = useState(history.length)
  const [ xIsNext, setXIsNext ] = useState(true)
  const squares = useMemo(() => history[stepNumber - 1].square, [ history, stepNumber ])

  const winner = calculateWinner(squares)

  let status: string
  if (winner) {
    status = 'Winner:' + winner
  } else {
    status = 'Next player:' + (xIsNext ? 'X' : 'O')
  }


  console.log(history, 'history')

  const handleClick = (i:number, row:number, col:number) => {
    const tempSquares = [ ...squares ]
    if (tempSquares[i] || winner) {
      return
    }
    tempSquares[i] = xIsNext ? 'X' : 'O'

    const tempHistory = [
      ...history,
      {
        square: tempSquares,
        row,
        col,
      },
    ]

    setHistory(tempHistory)
    setStepNumber(tempHistory.length)
    setXIsNext(!xIsNext)
  }


  function jumpTo (index:number):void {
    setStepNumber(index + 1)
    setXIsNext(index % 2 == 0)
  }


  return (
    <div className="game">
      <div className="game-board">
        {
          <Board
            squares={squares}
            onClick={(i:number, row:number, col:number) => handleClick(i, row, col)}
          />
        }
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {
            history.map((item, index) => (
              <Move key={index} step={item} move={index} onClick={() => jumpTo(index)}/>
            ))
          }
        </ol>
      </div>
    </div>
  )
}


export default Game
