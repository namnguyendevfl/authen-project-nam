import React, { useState, useEffect } from "react";
import Login from "../accounts/login";
import Errors from "../errors";
import { readUsers } from "../utils/api";

export default function Home() {

    const [found, setFound ] = useState(null);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect (() => {
        const abortController = new AbortController();
        readUsers(abortController.signal)
        .then(setUsers)
        .catch(setError);
        return () => abortController.abort();
    }, [])
    
    console.log(users);

    return (
        <>
        <Errors error = {error} />
        {found
        ?   <div >
                This is home
            </div>
        :   <div>
                <Login  users = {users} 
                        setFound = {setFound}
                        found = {found}
                        />
            </div>}
        </>
    )
}