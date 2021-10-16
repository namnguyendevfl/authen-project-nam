import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";

export default function Accounts({users, setFound, found}) {
    return (
        <>
        <div>
        <Switch>
            <Route exact path = "/">
                <Login  users = {users} 
                        setFound = {setFound}
                        found = {found}
                />
            </Route>

            <Route path = "/accounts/signup">
                <Signup />

            </Route>
        </Switch>
        </div>
        </>
    )
}
