import React, { useState, useEffect } from "react";
import Login from "../accounts/login";
import { readUsers } from "../utils/api";

export default function Home() {

    const [found, setFound ] = useState(null)
    const [users, setUsers] = useState([])
    useEffect (() => {
        const abortController = new AbortController();
        readUsers(abortController.signal)
        .then(setUsers)
    }, [])
    console.log(users);

    return (
        found
        ?   <div>
                This is home
            </div>
        :   <div>
                <Login users = {users} setFound = {setFound}/>
            </div>
    )
}