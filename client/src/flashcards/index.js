import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom"
import { readDeck } from "../utils/api";

import Deck from "./decks";
import CreateDeck from "./decks/createDecks";

export default function Flashcards() {
    const [deck, setDeck] = useState();
    const {path, params:{deckId}}  = useRouteMatch();
    const history = useHistory();
    const handleDecks = () => history.push(`${path}/decks/new`);

    useEffect(() => {
        readDeck()
        .then(setDeck)
    }, []);
    
    console.log(deck);

    return (
        <>
        <div>
            <Switch>
                <Route exact path={path}>
                    <button onClick = {handleDecks}> Create Decks</button>
                </Route>
                <Route path = {`${path}/decks`}>
                    <Deck />
                </Route>
                <Route path = {`${path}/decks/new`}>
                    <CreateDeck />
                </Route>
            </Switch>
       
        </div>   
        </>
    )
}