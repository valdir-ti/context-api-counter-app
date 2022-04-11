import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { DECREASE_COUNTER } from '../../constants'

const Decrease = () => {

    const { dispatch } = useContext(GlobalContext) 

    const handleDecrease = () => {
        dispatch({
            type: DECREASE_COUNTER
        })
    }
    return (
        <button className='decrease-button' onClick={handleDecrease} title='Decrease Counter'>Decrease</button>
    )
}

export { Decrease }