import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 
// import './index.css';
import Errors from "../../errors";

let logedInUser = [];


export default function Login({setFound, users, setUserLogedIn, userLogedIn}) {
    const [error, setError] = useState(null);
    
    const handleChange = ({target: {name, value}}) => {
        setUserLogedIn((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        const matchUser= users.find((user) => user.userName === userLogedIn.userName && user.password === userLogedIn.password );
        if(matchUser){
            const userId = matchUser.user_id
            setUserLogedIn(() => matchUser);
            logedInUser.push(matchUser);
            setFound(() => true);
            window.localStorage.setItem('login', JSON.stringify(logedInUser))
            window.localStorage.setItem('userId', JSON.stringify(userId))
        } else {
            setError(() => ({
                message: "wrong credentials",
                }));
        };
    }
 
    console.log(userLogedIn)

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
                        id = "userName"
                        name = "userName"
                        type = "text"
                        placeholder = "Phone number or email"
                        value = {userLogedIn.userName}
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
                        placeholder = "Password"
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
            {/* {userLogedIn !== undefined
            ?   <UserLogedIn userLogedIn = {userLogedIn} />
            :   null
            } */}
        </div>
    )
}



// export const LogedInUser = () => logedInUser
