import React from 'react'
import Header from '../components/ui/Header';
import Canvas from '../components/Canvas';

const Room = () => {

    const socket = new WebSocket('ws://localhost:3001');
    return (
        <>
            <Header text="DELINEATION" />
            <br></br>
            <Canvas height={450} width={500} socket={socket} />
        </>
    )
}

export default Room
