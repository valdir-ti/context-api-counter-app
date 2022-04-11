import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { INCREASE_COUNTER } from '../../constants'

const Increase = () => {
    
    const { dispatch } = useContext(GlobalContext)
    
    const handleIncrease = () => {
        dispatch({
            type: INCREASE_COUNTER
        })    
    }

    return (
        <button className='increase-button' onClick={handleIncrease} title='Increase Counter'>Increase</button>
    )
}

export { Increase }