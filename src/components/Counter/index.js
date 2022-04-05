import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

const Counter = () => {

    const { state } = useContext(GlobalContext)

    const counter = state.counter
    
    return (
        <div className='counter'>{counter}</div>
    )
}

export { Counter }