import React from "react";
import { Switch, Route, useHistory } from "react-router-dom"
import Flashcards from "../flashcards";
import Notebook from "../notebooks";

export default function Home({userLogedIn, setFound, setUserLogedIn}) {
    const initialUser = {
        userName: "",
        password: "",
    }
    const history = useHistory();
    const handleFlashcards = () => history.push("/flashcards");
    const handleLogOut = () => {
        window.localStorage.removeItem('login');
        window.localStorage.removeItem('userId');
        setFound(()=>false);
        setUserLogedIn(initialUser);
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
                    <button onClick = {(e) => history.push("/notebooks")}> Notebook</button>
                </div>
                <div>
                    <button onClick = {handleLogOut}>Log out</button>
                </div>
                </Route>
                <Route path = "/flashcards">
                        <Flashcards userLogedIn = {userLogedIn}/>
                </Route>
                <Route path = "/notebooks">
                    <Notebook />
                </Route>
            </Switch>
        </div>
    </>
    )
}