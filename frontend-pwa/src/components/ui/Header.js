import React from 'react'

const Header = (props) => {
    return (
        <h3 className="text-xl text-center md:text-2xl font-bold uppercase text-orange">{props.text}</h3>
    )
}

export default Header