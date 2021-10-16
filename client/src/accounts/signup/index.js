import React, { useState } from "react";
import { useHistory  } from "react-router-dom";
import Errors from "../../errors";
import { createUser } from "../../utils/api";

export default function Signup(){
    const history = useHistory();
    const initialUser = {
        firstName: "",
        surName: "",
        userName : "",
        password : "",
        ageDay: "",
        ageMonth:"",
        ageYear: "",
        gender: "",
        acceptTerm: "",
    }

    const [user, setUser] = useState(initialUser);
    const [error, setError] = useState(null);

    const handleChange = ({target: {name, value, type, checked}}) => {
        value = type === "checkbox" ? checked : value
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(user)
        .then(() => history.push("/"))
        .catch(setError);
    }
    console.log(user);

    const handleHome = () => {
        history.push("/");
    };

    const now = new Date();
    const currentYear = now.getFullYear()
    const days = []
    for (let i = 1; i<32; i++) days.push(i)
    const day = days.map((day,idx) => <option value = {day}>{day}</option>)
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const month = months.map((month,idx) => <option value = {month}>{month}</option>)

    const years = []
    for (let i = 1900; i<currentYear-12; i++) years.push(i)
    const year = years.map((year,idx) => <option value = {year}>{year}</option>)
    
    return (
        <div>
            <Errors error = {error}/>
            <div className = "signupBox">
            <form onSubmit = {handleSubmit}> 
            <div className = "d-flex px-3 pt-3">
                <div className = "pe-1 ">
                        <input
                        className = "px-1 w-100"
                        id = "firstName"
                        name = "firstName"
                        type = "text"
                        placeholder = "First name"
                        value = {user.firstName}
                        onChange = {handleChange}
                        required = "true"
                        >
                        </input>
                        </div>
                <div className = "ps-1">
                        <input
                        className = "px-1 w-100"
                        id = "surName"
                        name = "surName"
                        type = "text"
                        placeholder = "Last name"
                        value = {user.surName}
                        onChange = {handleChange}
                        required = "true"
                        >
                        </input>
                        </div>
                    </div>
                    <div className = "d-flex px-3 pt-3">
                        <input
                        className = "px-1 w-100 px-1"
                        id = "userName"
                        name = "userName"
                        placeholder = "Mobile phone number or email address"
                        type = "text"
                        value = {user.userName}
                        onChange = {handleChange}
                        required = "true"
                        >
                        </input>
                    </div>
                    <div className = "d-flex px-3 pt-3">
                        <label htmlFor = "password"> </label>
                        <input
                        className = "px-1 w-100 px-1"
                        id = "password"
                        name = "password"
                        type = "password"
                        placeholder = "Password"
                        value = {user.password}
                        onChange = {handleChange}
                        required = "true"
                        >
                        </input>
                    </div>
                    <div className="text-start px-3 pt-2">
                        <h6 >Birthday</h6>
                        <div className = "d-flex">
                        <div className = "pe-1"> 
                        <select
                            className = "px-1"
                            id = "month"
                            name = "ageMonth"
                            value = {user.ageMonth}
                            onChange = {handleChange}
                            >
                            <option> Month </option>
                            {month}
                        </select>
                        </div>
                        <div className = "pe-1"> 
                        <select
                            className = "text-center ps-1"
                            id = "day"
                            name = "ageDay"
                            value = {user.ageDay}
                            onChange = {handleChange}
                            >
                            <option> Day </option>
                            {day}
                        </select>
                        </div>

                        <div className = "pe-1"> 
                        <select
                            className = "text-center px-1"
                            id = "year"
                            name = "ageYear"
                            value = {user.ageYear}
                            onChange = {handleChange}
                            required = "true"
                            >
                            <option> Year </option>
                            {year}
                        </select>
                        </div>
                        </div>
                    </div>
                    <div className="text-start px-3 pt-2">
                        <div>                         
                        <input 
                        id = "male"
                        name = "gender"
                        type = "radio"
                        value = "male"
                        onChange = {handleChange}
                        checked = {user.gender === "male"}
                        >
                        </input>
                          
                        <label htmlFor = "male" className = "px-2"> Male </label>
                        </div>  
                        <input 
                        id = "female"
                        name = "gender"
                        type = "radio"
                        value = "female"
                        onChange = {handleChange}
                        checked = {user.gender === "female"}
                        >
                        </input>
                        <label htmlFor = "female" className = "px-2"> Female </label>

                    </div>
                    <div className="text-start px-3 pt-2">
                        <input
                            type = "checkbox"
                            id = "acceptTerm"
                            name = "acceptTerm"
                            onChange={handleChange}
                            checked={user.acceptTerm}
                            value="acceptTerm"
                            required = "true"
                        ></input>
                        <label className = "px-2" htmlFor = "acceptTerm">I accept the Term of Use and Privacy Policy</label>

                    </div>
                    <div className = "px-3 py-3">
                    <button 
                    className = "w-25"
                    type = "submit">
                        Sign up
                    </button>
                    </div>
 
            </form>

            </div>
            <button onClick = {handleHome}>
                home
            </button>
        </div>
    )
}