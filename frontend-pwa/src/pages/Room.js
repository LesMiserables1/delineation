import React from 'react'
import Header from '../components/ui/Header';
import Canvas from '../components/Canvas';

const Room = () => {
    
    const socket = new WebSocket('ws://localhost:3001');
    return (
        <>
            <Header text="delineation" />
            <Canvas height={500} width={500} socket={socket} />
        </>
    )
}

export default Room
