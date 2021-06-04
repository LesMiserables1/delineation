import React, { useState } from 'react'
import Header from '../components/ui/Header';
import Input from '../components/form/Input';
import Button from '../components/form/Button'
import axios from 'axios';

const Login = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleFormChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const login = () => {
        axios.post(`http://localhost:3002/login`, {
            username: formData.username,
            password: formData.password
        })
            .then(res => {
                if(res.status === 'ok') {
                    props.history.push('/')
                }
            })
    }

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <div className="w-fit-content">
                <Header text="Login" />
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
                <Button text="Login" className="w-full mt-5" clickHandler={login} />
            </div>
        </div>
    )
}

export default Login
