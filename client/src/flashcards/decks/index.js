import React from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import Cards from "../cards";
import CreateDeck from "./createDecks";
import Decklist from "./Decklist";
export default function Decks({userLogedIn}) {
    const {path, params:{deckId}}  = useRouteMatch();
    const history = useHistory();
    console.log(path)
    const handleDecks = () => history.push(`${path}/new`)
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <Decklist />
                    <button onClick = {handleDecks}> Create Decks</button>
                </Route>

                <Route path = {`${path}/create-deck`}>
                    <CreateDeck userLogedIn={userLogedIn}/>
                </Route>

                <Route path = {`${path}/view-deck/:deckId`} >  
                    <Cards />
                </Route>
                <Route path = "*">
                    Notfound
                </Route>
            </Switch>
        </div>
    )
}