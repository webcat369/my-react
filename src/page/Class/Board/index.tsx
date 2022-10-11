import React from 'react'
import './index.scss'
import Square from '@/page/Class/Square'
import type{ Squares } from '@/page/Class/Square'
export type Player = 'X' | 'O'

export interface Props{
  squares:Squares,
  statusMsg:string,
  nextPlayer:Player,
  fillSquare:(squareIdx:number) => void
}

export default class Board extends React.Component<Props> {
  renderSquare (squareIdx:number) {
    const { squareContent } = this.props.squares[squareIdx]

    return (
      <Square squareContent={squareContent}
        fillSquare={() => this.props.fillSquare(squareIdx)}/>
    )
  }


  render (): React.ReactNode {
    return (
      <div>
        <h1 className="board-status-msg">{this.props.statusMsg}</h1>
        <div className="board-row clearfix">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row clearfix">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row clearfix">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
