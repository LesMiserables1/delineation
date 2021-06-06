import React, { useState, useEffect, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../actions/action';
import { useHistory } from 'react-router-dom'

const Navbar = (props) => {
    const history = useHistory()
    const {auth: {isLoggedIn}} = useSelector(state => state);
    const dispatch = useCallback(useDispatch(), []);
    const [hide, setHide] = useState(false)

    const logout = () => {
        localStorage.removeItem('token')
        dispatch(setIsLoggedIn(false))
    }

    useEffect(() => {
        if(window.location.href === 'http://localhost:3000/') {
            setHide(true)
        }
    }, [])

    useEffect(() => {
        history?.listen((location) => { 
            if(location.pathname === '/') {
                setHide(true)
            } else {
                setHide(false)
            }
        }) 

    }, [history])

    return (
        <div className="flex justify-end items-center px-3">
            {
                hide ? (
                    <></>
                ) : (
                    <div className="absolute" style={{top: '20px', right: '20px'}}>
                        <NavLink to="/" className="text-orange mr-3 txt-lg font-bold">Home</NavLink>
                        <NavLink to="/input-room" className="text-orange mr-3 txt-lg font-bold">Input Room</NavLink>
                        {isLoggedIn ? (
                            <button className="text-orange mr-3 txt-lg font-bold" onClick={logout}>Logout</button>
                        ) : (
                            <>
                                <NavLink to="/login" className="text-orange mr-3 txt-lg font-bold">Login</NavLink>
                                <NavLink to="/signup" className="text-orange txt-lg font-bold">Signup</NavLink>
                            </>
                        )}
                    </div>
                )
            }
            
        </div>
    )
}

export default Navbar
