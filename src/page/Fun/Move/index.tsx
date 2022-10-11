import React from 'react'

interface IProps{
  step:any,
  move:number,
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick:Function
}

const Move = (props:IProps) => {
  const desc = props.move ? 'Go to mode #' + props.move : 'Go to game start'

  return (
    <li style={{ textAlign: 'left' }}>
      <button onClick={() => props.onClick()}>{desc}</button>
      {
        props.step && (
          <>
            <span style={{ margin: '0 10px' }}>last positon:</span>
            <span>
              row {props.step.row},col {props.step.col}
            </span>
          </>
        )
      }
    </li>
  )
}

export default Move
