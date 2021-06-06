import React from 'react'

const Container = (props) => {
    return (
        <div className='bg-light-gray h-screen overflow-hidden'>
            {props.children}
        </div>
    )
}

export default Container
