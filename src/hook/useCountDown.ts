import React, { useState, useEffect, useRef } from 'react'

interface IProps {
  mss:number
}

type Fnc = () => void
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}


const useCountDown = (props:Partial<IProps>) => {
  const { mss } = props
  const [ time, setTime ] = useState(mss || 0)
  const tickRef = useRef<Fnc>(noop)

  const tick = () => {
    if (time > 0) {
      setTime(time - 1)
    }
  }

  useEffect(() => {
    tickRef.current = tick
  })

  useEffect(() => {
    const timerId = setInterval(() => tickRef.current(), 1000)
    return () => clearInterval(timerId)
  }, [])

  return [ time ]
}

export default useCountDown
