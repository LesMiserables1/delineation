import React from 'react'
import Header from '../components/ui/Header';
import Button from '../components/form/Button';
import { NavLink } from 'react-router-dom'
import styles from './Home.module.css'

const Home = (props) => {

    return (
        <div className={`${styles.home} flex flex-col justify-between h-full`}>
            <div className="bg-white py-10">
                <Header text="Delineation" />
                <p className="w-fit-content text-md mx-auto">Draw your Discussion</p>
            </div>

            <div className="bg-white py-10 flex flex-col items-center">
                <NavLink to="/input-room">
                    <Button text="Join Room" secondary={true} />
                </NavLink>

                <div className="mt-5">
                    <p className="w-fit-content text-lg mx-auto font-bold">Create Room</p>
                    <div className="flex items-center justify-center">
                        <NavLink to="/signup" className="mr-5">
                            <Button text="Signup" />
                        </NavLink>
                        <NavLink to="/login">
                            <Button text="Login" secondary={true} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home