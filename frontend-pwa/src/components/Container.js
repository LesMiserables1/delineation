import React from 'react'

const Container = (props) => {
    return (
        <div className="w-fit-content mx-auto pt-5">
            {props.children}
        </div>
    )
}

export default Container
