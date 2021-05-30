import React from 'react'

const Container = (props) => {
    return (
        <div className="pt-5 bg-light-gray h-screen">
            {props.children}
        </div>
    )
}

export default Container
