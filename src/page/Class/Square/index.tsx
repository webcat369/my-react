import React from 'react'
import './index.scss'

export interface Props{
  squareContent:string | null,
  fillSquare:() => void
}

export type Squares = Omit<Props, 'fillSquare'>[]

export default function Square (props:Props) {
  return (
    <div className='square' onClick={() => props.fillSquare()}>
      {props.squareContent}
    </div>
  )
}
