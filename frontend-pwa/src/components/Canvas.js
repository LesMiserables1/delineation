import React, { useState, useEffect, useRef, useCallback } from 'react'

const Canvas = (props) => {
    const canvasRef = useRef(null)
    const [isPainting, setIsPainting] = useState(false);
    const [mousePosition, setMousePosition] = useState();

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if(context) {
            context.canvas.width = props.width;
            context.canvas.height = props.height;

            context.lineWidth = "2";
            context.strokeStyle = "#A00000";
            context.strokeRect(0, 0, props.width, props.height);
        }
    }, [])

    const startPaint = useCallback((event) => {
        const coordinates = getCoordinates(event);
        if (coordinates) {
            setMousePosition(coordinates);
            setIsPainting(true);
        }
    }, []);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        canvas.addEventListener('mousedown', startPaint);
        return () => {
            canvas.removeEventListener('mousedown', startPaint);
        };
    }, [startPaint]);

    const paint = useCallback(
        (event) => {
            if (isPainting) {
                const newMousePosition = getCoordinates(event);
                if (mousePosition && newMousePosition) {
                    drawLine(mousePosition, newMousePosition);
                    setMousePosition(newMousePosition);
                }
            }
        },
        [isPainting, mousePosition]
    );

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        canvas.addEventListener('mousemove', paint);
        return () => {
            canvas.removeEventListener('mousemove', paint);
        };
    }, [paint]);

    const exitPaint = useCallback(() => {
        setIsPainting(false);
        setMousePosition(undefined);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
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

    return (
        <canvas ref={canvasRef} {...props}/>
    )
}

export default Canvas

// import React, { useEffect, useRef, useCallback } from 'react'

// const Canvas = (props) => {
//     const canvasRef = useRef(null)

//     const draw = ctx => {
//         ctx.fillStyle = '#000000'
//         ctx.beginPath()
//         ctx.arc(50, 100, 20, 0, 2*Math.PI)
//         ctx.fill()
//     }
    
//     useEffect(() => {
//         const canvas = canvasRef.current
//         const context = canvas.getContext('2d')
        
//         //Our draw come here
//         draw(context)
//     }, [draw])

//     return (
//         <canvas ref={canvasRef} {...props}/>
//     )
// }

// export default Canvas
