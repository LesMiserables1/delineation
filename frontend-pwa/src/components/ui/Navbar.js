import React, { useState, useEffect, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../actions/action';

const Navbar = (props) => {

    const {auth: {isLoggedIn}} = useSelector(state => state);
    const dispatch = useCallback(useDispatch(), []);

    const logout = () => {
        dispatch(setIsLoggedIn(false))
    }

    return (
        <div className="flex justify-end items-center px-3">
            <NavLink to="/" className="text-orange mr-3 txt-lg font-bold">Home</NavLink>
            {
                isLoggedIn ? (
                    <button className="text-orange mr-3 txt-lg font-bold" onClick={logout}>Logout</button>
                ) : (
                    <>
                        <NavLink to="/login" className="text-orange mr-3 txt-lg font-bold">Login</NavLink>
                        <NavLink to="/signup" className="text-orange txt-lg font-bold">Signup</NavLink>
                    </>
                )
            }
        </div>
    )
}

export default Navbar
