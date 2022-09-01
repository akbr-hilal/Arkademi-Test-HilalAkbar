import React, { useEffect, useState } from 'react'

const CountdownTimer = ({HoursMinsSecs}) => {

  const { hours = 0, minutes = 0, seconds = 60} = HoursMinsSecs
  const [[hrs, mins, secs], setTime] = useState([ hours, minutes, seconds ])

  const reset = () => {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)])
  }

  const timer = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
      reset()
    } else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59])
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59])
    } else {
      setTime([hrs, mins, secs - 1])
    }
  }

  useEffect(() => {
    const timerId = setInterval(() => timer(), 1000)
    return () => clearInterval(timerId)
  })
  return (
    <div>
      <p className='m-0'>
        {`${hrs.toString().padStart(2, '0')} : ${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`}
      </p>
    </div>
  )
}

export default CountdownTimer