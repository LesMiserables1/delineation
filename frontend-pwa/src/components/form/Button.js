import React from 'react'

const Button = (props) => {
    return (
        <button 
            className={`rounded-3xl font-bold text-lg md:text-xl ${props.secondary ? 'border-2 border-orange' : 'bg-orange'} py-2 px-4 ${props.className}`} 
            onClick={props.clickHandler}
        >
            {props.text}
        </button>
    )
}

export default Button
