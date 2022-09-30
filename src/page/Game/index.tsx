import React from 'react'
import Board from '@/page/Board'
import './index.scss'

const Game = () => (
  <div className="game">
    <div className="game-board">
      <Board/>
    </div>
    <div className="game-info">
      <div></div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
)


export default Game
