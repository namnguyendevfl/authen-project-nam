import React, { useState } from "react";
import { useHistory  } from "react-router-dom";
import { createUser } from "../../utils/api";

export default function Signup(){
    const history = useHistory();
    const initialUser = {
        username : "",
        password : ""
    }

    const [user, setUser] = useState(initialUser);

    const handleChange = ({target: {name, value}}) => {
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(user)
        .then(() => history.push("/"))
    }
    console.log(user);

    const handleHome = () => {
        history.push("/");
    };


    return (
        <div>
            <form onSubmit = {handleSubmit}> 
                <fieldset>
                    <legend>Sign up</legend>
                    <div>
                        <label htmlFor = "username"> Username: </label>
                        <input
                        id = "username"
                        name = "username"
                        type = "text"
                        value = {user.username}
                        onChange = {handleChange}
                        >
                        </input>
                    </div>
                    <div>
                        <label htmlFor = "password"> Password: </label>
                        <input
                        id = "password"
                        name = "password"
                        type = "password"
                        value = {user.password}
                        onChange = {handleChange}
                        >
                        </input>
                    </div>
                    <button type = "submit">
                        Submit
                    </button>
                </fieldset>
 
            </form>
            <button onClick = {handleHome}>
                home
            </button>
        </div>
    )
}