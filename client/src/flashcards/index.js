import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom"
import Errors from "../errors";
import { readDecks } from "../utils/api";
import Cards from "./cards";
import CreateDeck from "./decks/createDecks";
import Deck from "./decks/Deck";


export default function Flashcards({userLogedIn}) {
    const [decks, setDecks] = useState([]);
    const {path}  = useRouteMatch();
    const [error, setError] = useState(null);
    const [deckId, setDeckId] = useState(null);
    const [deckSelected, setDeckSelected] = useState(null);
    const [count, setCount] = useState(0)

    useEffect(() => {
        const abortController = new AbortController();
        readDecks(abortController.signal, userLogedIn.user_id)
        .then(setDecks)
        .catch(setError);
        return () => abortController.abort();
    }, [count]);

    const listDeck = decks.map((deck,idx) => (
        <>
            <Deck key = {idx} deck = {deck} setDeckSelected = {setDeckSelected} deckId = {deckId} setDeckId = {setDeckId} />
        </>)
    );

    return (
        <>
        <Errors error = {error} />
        <div>
            <Switch>
                <Route exact path={path}>
                    <Link to = {`${path}/create-deck`}>
                        <button> Create Deck</button>
                    </Link>
                    <div>
                    {listDeck}
                    </div>
                </Route>
                <Route path = {`${path}/create-deck`} >
                    <CreateDeck userLogedIn = {userLogedIn} setCount = {setCount} count = {count}/>
                </Route>
                <Route path = {`${path}/view-deck/:deckId`} >
                    <Cards deckSelected = {deckSelected} deckId = {deckId} />
                </Route> 
            </Switch>
       
        </div>   
        </>
    )
}