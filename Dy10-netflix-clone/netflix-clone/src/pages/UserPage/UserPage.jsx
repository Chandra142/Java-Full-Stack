import React from "react";
import {useNavigate} from "react-router-dom";

const UserPage = () => {
    let navigate = useNavigate()
    const username = localStorage.getItem('username') ? localStorage.getItem('username') : "Load Failed"
    const style = {
        color: "black"
    }
    const logoutHandler = () => {
        localStorage.removeItem('username')
        navigate('/')
    }
    return(
        <>
            <h2 style={style}>{username}</h2>
            <button onClick={logoutHandler}>Logout</button>
        </>
    )
       
}
  <button>Logout</button>

export default UserPage