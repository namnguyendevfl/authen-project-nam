import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"; 

export default function Login({setFound, users}) {
    const initialUser = {
        username: "",
        password: "",
    }

    const [userLogedIn, setUserLogedIn] = useState(initialUser);
    
    const handleChange = ({target: {name, value}}) => {
        setUserLogedIn((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFound(() => 
        users.some((user) => user.username === userLogedIn.username && user.password === userLogedIn.password)
        )
    }

    const history = useHistory();
    const handleSignup = () => {
        history.push("/accounts/signup");
    }
    console.log(userLogedIn)

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <fieldset> 
                    <legend> Login </legend>
                    <div>
                        <label htmlFor = "username"> Username </label>
                        <input
                        id = "username"
                        name = "username"
                        type = "text"
                        value = {userLogedIn.username}
                        onChange = {handleChange}
                        >
                        </input>
                    </div>

                    <div>
                        <label htmlFor = "password"> Password </label>
                        <input
                        id = "password"
                        name = "password"
                        type = "password"
                        value = {userLogedIn.password}
                        onChange = {handleChange}
                        >
                        </input>
                    </div>
                    <button type = "submit">
                        Submit
                    </button>
                </fieldset>
            </form>
            {/* <Link to = "/accounts/signup">
                <button onClick = {handleSignup}>
                    Signup
                </button>
            </Link> */}
            <button onClick = {handleSignup}>
                    Signup
            </button>
        </div>
    )
}