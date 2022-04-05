import React from 'react'

const Increase = () => {
    const handleIncrease = () => {
        alert('handle Increase')
    }
    return (
        <button className='increase-button' onClick={handleIncrease}>Increase</button>
    )
}

export { Increase }