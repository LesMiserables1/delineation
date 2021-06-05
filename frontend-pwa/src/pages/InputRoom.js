import React, { useState } from 'react'
import Header from '../components/ui/Header';
import Input from '../components/form/Input';
import Button from '../components/form/Button'

const InputRoom = (props) => {

    const [roomNumber, setRoomNumber] = useState('')

    const enterRoom = () => {
        localStorage.setItem('roomNumber', roomNumber);
        props.history.push('/room')
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="w-fit-content">
                    <Header text="Input Room Number" />
                    <Input 
                        name="username" 
                        type="text" 
                        onChange={(e) => setRoomNumber(e.target.value)} 
                        className="w-64 sm:w-72"
                        value={roomNumber} 
                        placeholder="Please enter your room number..."
                    />
                    <Button text="Enter" className="w-full mt-5" clickHandler={enterRoom} />
                </div>
            </div>
        </>
    )
}

export default InputRoom