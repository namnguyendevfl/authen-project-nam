import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom"
import Flashcards from "../flashcards";


export default function Home() {
    const history = useHistory();
    const handleFlashcards = () => history.push("/flashcards")
        
    return (
        <>
        {/* <Errors error = {error} /> */}
        <div>
            <Switch> 
                <Route exact path = "/">
                        This is home
                <button
                    onClick = {handleFlashcards}        
                        >
                            Flash Cards
                </button>
                </Route>
                <Route path = "/flashcards">
                        <Flashcards />
                </Route>
            </Switch>
        </div>
    </>
    )
}