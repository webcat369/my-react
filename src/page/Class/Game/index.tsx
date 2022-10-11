import React from 'react'
import Board from '@/page/Class/Board'
import type { Props as BoardProps, Player } from '@/page/Class/Board'
import type { Squares } from '@/page/Class/Square'

type BoardPropsNeeded = Omit<BoardProps, 'fillSquare'>[]

interface State{
  history:BoardPropsNeeded,
  historyIdx:number
}

const calcWinner = (squares:Squares):Player | null => {
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
      return squares[a].squareContent as Player
    }
  }
  return null
}


export default class Game extends React.Component<any, State> {
  constructor (props:any) {
    super(props)

    this.state = {
      history: [
        {
          squares: new Array(9).fill({ squareContent: null }),
          nextPlayer: 'X',
          statusMsg: 'Next Palyer X',
        },
      ],
      historyIdx: 0,
    }
  }

  togglePlayer ():Player {
    const currentBoard = this.state.history[this.state.historyIdx]
    return currentBoard.nextPlayer === 'X' ? 'O' : 'X'
  }

  fillSquare (squareIdx:number) {
    const history = this.state.history.slice(0, this.state.historyIdx + 1)
    const currentBoard = history[this.state.historyIdx]

    if (calcWinner(currentBoard.squares) || currentBoard.squares[squareIdx].squareContent !== null) {return}

    const squares = currentBoard.squares.slice()
    squares[squareIdx].squareContent =  currentBoard.nextPlayer

    this.setState({
      history: history.concat([
        {
          squares,
          statusMsg: currentBoard.statusMsg,
          nextPlayer: this.togglePlayer(),
        },
      ]),
      historyIdx: history.length,
    })

    console.log(squares)

  }

  jumpTo (historyIdx:number) {
    this.setState({ historyIdx })
  }

  render (): React.ReactNode {
    const history = this.state.history
    const currentBoard = history[this.state.historyIdx]
    const { nextPlayer } = currentBoard
    console.log(currentBoard, nextPlayer)

    const winner = calcWinner(currentBoard.squares)
    let boardStatusMsg:string
    if (winner) {
      boardStatusMsg = 'Winner:' + winner
    } else {
      boardStatusMsg = 'Next player:' + nextPlayer
    }

    const historyItems = history.map((item, Idx) => {
      const desc = Idx ? `GO to #${Idx}` : 'Go to game start'
      return (
        <li key={Idx}>
          <button className='history-item' onClick={() => this.jumpTo(Idx)}>{desc}</button>
        </li>
      )
    })

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={currentBoard.squares}
            statusMsg={boardStatusMsg}
            nextPlayer={nextPlayer}
            fillSquare={(historyIdx:number) => this.fillSquare(historyIdx)}
          />
        </div>
        <div className="game-info">
          <h1>History</h1>
          <ol>{historyItems}</ol>
        </div>
      </div>
    )
  }
}
