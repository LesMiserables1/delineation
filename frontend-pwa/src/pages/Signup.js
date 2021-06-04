import React, { useState } from 'react'
import Header from '../components/ui/Header';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import axios from 'axios';

const Signup = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: ''
    })

    const handleFormChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const signup = () => {
        axios.post(`http://localhost:3002/register`, {
            username: formData.username,
            password: formData.password
        })
            .then(res => {
                if(res.status === 'ok') {
                    props.history.push('/login')
                }
            })
    }

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <div className="w-fit-content">
                <Header text="signup" />
                <Input 
                    name="name" 
                    type="text" 
                    onChange={handleFormChange} 
                    className="w-64 sm:w-72"
                    value={formData.name} 
                    placeholder="Please enter your name..."
                />
                <Input 
                    name="username" 
                    type="text" 
                    onChange={handleFormChange} 
                    className="w-64 sm:w-72"
                    value={formData.username} 
                    placeholder="Please enter your username..."
                />
                <Input 
                    name="password" 
                    type="password" 
                    onChange={handleFormChange} 
                    className="w-64 sm:w-72"
                    value={formData.password} 
                    placeholder="Type in your password"
                />
                <Button text="Signup" className="w-full mt-5" clickHandler={signup} />
            </div>
        </div>
    )
}

export default Signup
