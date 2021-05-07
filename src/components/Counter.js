import React, { useState } from 'react'
import './style.css'

const Counter = () => {
  const [count, setCount] = useState(0)
  const handleDecrement = () => {
    setCount(count - 1)
  }
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleReset = () => {
    setCount(0)
  }
  return (
    <div>
      <h1>Managing stae using useState hooks</h1>
      <div className='styleup'>
        <button onClick={handleDecrement}>Decrement</button> <p className='p-tag'>{count}</p>{' '}
        <button onClick={handleIncrement}>Increment</button>
      </div>

      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter
