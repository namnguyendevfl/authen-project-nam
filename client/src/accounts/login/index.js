import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 
// import './index.css';
import Errors from "../../errors";

export default function Login({setFound, users}) {
    const initialUser = {
        username: "",
        password: "",
    }

    const [userLogedIn, setUserLogedIn] = useState(initialUser);
    const [error, setError] = useState(null);
    
    const handleChange = ({target: {name, value}}) => {
        setUserLogedIn((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const found = users.some((user) => user.username === userLogedIn.username && user.password === userLogedIn.password);
        found
        ?   setFound(() => found)
        :   setError(() => ({
            message: "wrong credentials",
            }));

    }
    const history = useHistory();
    const handleSignup = () => {
        history.push("/accounts/signup");
    }
    return (
        <div className = "loginBox">
            <Errors error = {error} />
            <div >
            <form onSubmit = {handleSubmit}>
                <div className = "d-flex justify-content-center align-item-center py-2 pt-5">
                    <input
                        className = "w-75"
                        id = "username"
                        name = "username"
                        type = "text"
                        placeholder = "username"
                        value = {userLogedIn.username}
                        onChange = {handleChange}
                        >
                    </input>
                </div>
                <div className = "d-flex justify-content-center align-item-center py-2">
                    <input
                        className = "w-75"
                        id = "password"
                        name = "password"
                        type = "password"
                        placeholder = "password"
                        value = {userLogedIn.password}
                        onChange = {handleChange}
                        >
                    </input>
                </div>
                <div className = "d-flex justify-content-center align-item-center py-2">
                <button 
                         className = "w-75 bg-white border border-white"
                        onClick = "">
                        Forgotten account?
                </button>
                </div>
                <div className = "d-flex justify-content-center align-item-center py-2"> 
                <button 
                    className = "w-75"
                    type = "submit">
                    Log in 
                </button>
                </div>
            </form>
            </div>

            <hr/>
            <div className = "d-flex justify-content-center align-item-center py-2 pb-5"> 
                <button 
                        className = "w-75"
                        onClick = {handleSignup}>
                        Create New Account
                </button>
            </div>
        </div>
    )
}