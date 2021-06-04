import React, { useState, useEffect, useRef, useCallback } from 'react'
import Button from './form/Button';

const Canvas = ({height, width, socket}) => {
    const canvasRef = useRef(null)
    const [isPainting, setIsPainting] = useState(false);
    const [mousePosition, setMousePosition] = useState();

    const startPaint = useCallback((event) => {
        const coordinates = getCoordinates(event);
        if (coordinates) {
            setMousePosition(coordinates);
            setIsPainting(true);
        }
    }, []);
    
    const paint = useCallback(
        (event) => {
            if (isPainting) {
                const newMousePosition = getCoordinates(event);
                const roomNumber = localStorage.getItem('roomNumber')
                if (mousePosition && newMousePosition) {
                    socket.send(JSON.stringify({roomNumber,mousePosition,newMousePosition}))         
                    drawLine(mousePosition, newMousePosition);
                    setMousePosition(newMousePosition);
                }
            }
        },
        [isPainting, mousePosition]
    );

    const exitPaint = useCallback(() => {
        setIsPainting(false);
        setMousePosition(undefined);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if(context) {
            context.canvas.width = width;
            context.canvas.height = height;

            context.lineWidth = "2";
            context.strokeStyle = "#A00000";
            context.strokeRect(0, 0, width, height);
        }
        socket.onmessage = ({data}) => {
            data = JSON.parse(data)
            if(data.clear) {
                const canvas = canvasRef.current;
                const context = canvas.getContext('2d');
                context.clearRect(1, 1, width-2, height-2);
                return;
            }
            drawLine(data.mousePosition,data.newMousePosition);
            setMousePosition(data.newMousePosition);
        }

    }, [])

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.addEventListener('mousedown', startPaint);
        return () => {
            canvas.removeEventListener('mousedown', startPaint);
        };
    }, [startPaint]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.addEventListener('mousemove', paint);
        return () => {
            canvas.removeEventListener('mousemove', paint);
        };
    }, [paint]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.addEventListener('mouseup', exitPaint);
        canvas.addEventListener('mouseleave', exitPaint);
        return () => {
            canvas.removeEventListener('mouseup', exitPaint);
            canvas.removeEventListener('mouseleave', exitPaint);
        };
    }, [exitPaint]);

    const getCoordinates = (event) => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
    };

    const drawLine = (originalMousePosition, newMousePosition) => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (context) {
            context.strokeStyle = 'red';
            context.lineJoin = 'round';
            context.lineWidth = 5;

            context.beginPath();
            context.moveTo(originalMousePosition.x, originalMousePosition.y);
            context.lineTo(newMousePosition.x, newMousePosition.y);
            context.closePath();
            context.stroke();
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(1, 1, width-2, height-2);
        socket.send(JSON.stringify({clear: true}))         
    }

    const exitRoom = () => {
        
    }

    return (
        <>  
            <canvas ref={canvasRef} className="mx-auto" /> 
            <div className="flex items-center mt-5 justify-center">
                <Button text="Clear Canvas" className="mr-2" clickHandler={clearCanvas} />  
                <Button text="Exit Room" secondary={true} clickHandler={exitRoom} /> 
            </div>   
        </>
    )
}

export default Canvas
