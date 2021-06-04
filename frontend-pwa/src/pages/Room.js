import React, { useEffect } from 'react'
import Header from '../components/ui/Header';
import Canvas from '../components/Canvas';
import { useSelector } from 'react-redux';

const Room = (props) => {
    
    const socket = new WebSocket('ws://localhost:3001');
    const {auth: {isLoggedIn}} = useSelector(state => state);
    
    useEffect(() => {
        const roomNumber = localStorage.getItem('roomNumber')
        if(!isLoggedIn) {
            props.history.push('/login')
        }
        else if(!roomNumber) {
            props.history.push('/')
        }
    }, [])
    
    return (
        <>
            <Header text="delineation" />
            <Canvas height={500} width={500} socket={socket} />
        </>
    )
}

export default Room
