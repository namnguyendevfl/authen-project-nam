import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 
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
        <div>
            <Errors error = {error} />
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