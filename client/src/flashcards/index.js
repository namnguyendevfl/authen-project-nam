import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, useHistory, Link } from "react-router-dom"
import { readDeck } from "../utils/api";

import Decks from "./decks";
import CreateDeck from "./decks/createDecks";
import Deck from "./decks/Deck";
import Decklist from "./decks/Decklist";

export default function Flashcards({userLogedIn}) {
    const [decks, setDecks] = useState([]);
    const {path, params:{deckId}}  = useRouteMatch();
    const history = useHistory();
    // const handleDecks = () => history.push(`${path}/decks/new`);

    useEffect(() => {
        readDeck()
        .then(setDecks)
    }, []);

    console.log(decks);
    return (
        <>
        <div>
            <Switch>
                <Route exact path={path}>
                    <Link to = {`${path}/create-deck`}>
                        <button> Create Deck</button>
                    </Link>
                    <div>
                        <Decklist decks = {decks}/>
                    </div>
                </Route>
                <Route path = {`${path}`} >
                    <Decks userLogedIn = {userLogedIn}/>
                </Route>
            </Switch>
       
        </div>   
        </>
    )
}