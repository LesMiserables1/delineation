import React, { useEffect, useRef } from 'react'

const Canvas = (props) => {
    const canvasRef = useRef(null)
	var socket = new WebSocket('wss://ws-pjpb.herokuapp.com/');
  
    const draw = (ctx,counter) => {
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50*counter, 100, 20, 0, 2*Math.PI)
        ctx.fill()
    }
    
    useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let counter = 0
        //Our draw come here
        socket.onopen = () => socket.send(new Date().toGMTString());
        
        socket.onmessage = ({data}) => {
            counter++
            draw(context,counter)
			console.log('Data Masuk', data)
        } 

    }, [draw])

    return (
        <>
            <canvas ref={canvasRef} {...props}/>
            <button onClick={() => socket.send('halo')}>Klik</button>        
        </>
    )
}

export default Canvas
