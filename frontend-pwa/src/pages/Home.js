import React, { useState, useEffect, useCallback, Text, View, Stylesheet, Image} from 'react'
import Header from '../components/ui/Header';
import Button from '../components/form/Button'

const Home = (props) => {

    return (
        <div className=" flex flex-col items-center">
            <div className="w-fit-content">
                <Header text="Delineation" />
                <p align="center"><b>Draw Your Discussion</b></p>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <Button text="Join Room" className="w-full mt-5" clickHandler={Home} />
                <br></br><br></br>
                <p align="center"><b>Create Room</b></p>
            <tr>   
                <td></td>
                <td><Button text="Register" className="w-full mt-1" clickHandler={Home} />
                    <Button text="Sign In" className="w-full mt-1" clickHandler={Home} />
                </td>
            </tr>
            </div>
        </div>
    )
}

export default Home
