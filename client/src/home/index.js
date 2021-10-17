import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom"
import Flashcards from "../flashcards";

export default function Home({userLogedIn, setFound}) {
    const history = useHistory();
    const handleFlashcards = () => history.push("/flashcards");
    const handleLogOut = () => {
        window.localStorage.removeItem('login');
        setFound(()=>false);
        history.push("/");
    }
    return (
        <>
        {/* <Errors error = {error} /> */}
        <div>
            <Switch> 
                <Route exact path = "/">
                        This is home
                <div>
                <button
                    onClick = {handleFlashcards}        
                        >
                            Flash Cards
                </button>
                </div>
                <div>
                    <button onClick = {handleLogOut}>Log out</button>
                </div>
                </Route>
                <Route path = "/flashcards">
                        <Flashcards userLogedIn = {userLogedIn}/>
                </Route>
            </Switch>
        </div>
    </>
    )
}