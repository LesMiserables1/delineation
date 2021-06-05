import React from 'react'
import Header from '../components/ui/Header';
import Canvas from '../components/Canvas';

const Room = () => {

    const socket = new WebSocket('ws://localhost:3001');
    return (
        <>
            <Header text="DELINEATION" />
            <marquee width="100%" direction="left"> <i>Aplikasi Delineation ditujukan untuk mendukung kegiatan diskusi. Aplikasi ini akan memungkinkan user menggambarkan atau menjelaskan suatu hal dan dapat langsung dilihat oleh user lain yang berada dalam room yang sama </i> </marquee>
            <br></br>
            <Canvas height={450} width={500} socket={socket} />
        </>
    )
}

export default Room
