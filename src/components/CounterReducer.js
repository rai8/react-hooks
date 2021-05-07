import React, { useReducer } from 'react'
import './style.css'

const CounterReducer = () => {
  //reducer function
  const reducer = (state, action) => {
    //logiC goes in here
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 }

      case 'DECREMENT':
        return { count: state.count - 1 }

      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' })
  }
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' })
  }

  return (
    <div>
      <h1>Managing stae using useState hooks</h1>
      <div className='styleup'>
        <button onClick={handleDecrement}>Decrement</button>
        <p className='p-tag'>{state.count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>

      <br />
    </div>
  )
}

export default CounterReducer
