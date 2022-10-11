import React, { useState, useEffect, useRef } from 'react'
import useCountDown from '@/hook/useCountDown'

interface Iprops{
  mss:number
}

export default function CountDown (props:Iprops) {
  const { mss } = props
  const [ time ] = useCountDown({ mss })

  return (
    <p>{time.toString().padStart(2, '0')}</p>
  )
}
