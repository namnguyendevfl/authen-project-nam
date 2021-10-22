import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";

export default function Accounts({users, setFound, found, setUserLogedIn, userLogedIn, count, setCount}) {
    
    return (
        <>
        <div>
        <Switch>
            <Route exact path = "/">
                <Login  users = {users} 
                        setFound = {setFound}
                        found = {found}
                        setUserLogedIn = {setUserLogedIn}
                        userLogedIn = {userLogedIn}
                />
            </Route>

            <Route path = "/accounts/signup">
                <Signup count = {count} setCount = {setCount}/>

            </Route>
        </Switch>
        </div>
        </>
    )
}
