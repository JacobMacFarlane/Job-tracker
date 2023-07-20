import React from 'react'

const ProgressBar = ({ progress }) => {
    return (
        <div className='w-full h-4 bg-gray-200'>
            <div className={`h-full bg-blue-500 transition-width ease-in-out duration-300`} style={{ width: `${progress * 16.6666667}%` }}></div>
        </div>
    )
}

export default ProgressBar