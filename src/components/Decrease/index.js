import React from 'react'

const Decrease = () => {
    const handleDecrease = () => {
        alert('handleDecrease')
    }
    return (
        <button className='decrease-button' onClick={handleDecrease}>Decrease</button>
    )
}

export { Decrease }