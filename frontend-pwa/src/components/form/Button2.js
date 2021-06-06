import React from 'react'

const Button2 = (props) => {
    return (
        <button2 
            className={`rounded-3xl font-bold text-lg md:text-xl ${props.secondary ? 'border-2 border-white' : 'bg-white'} py-2 px-4 ${props.className}`} 
            onClick={props.clickHandler}
        >
            {props.text}
        </button2>
    )
}

export default Button
