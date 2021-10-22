import React, { useEffect, useState } from "react";
import { useRouteMatch  } from "react-router";
import { Switch, Route, Link } from "react-router-dom";
import CreateCard from "./CreateCard";
import { readCards } from "../../utils/api";
import Errors from "../../errors";
import CardList from "./CardList";
import Card from "./Card";

export default function Cards({}) {
    const { url }  = useRouteMatch();
    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0)
    let deckId = window.localStorage.getItem('deckId');
    deckId = JSON.parse(deckId);

    let deckSelected = window.localStorage.getItem('deckSelected');
    deckSelected = JSON.parse(deckSelected);

    let cardSelected = window.localStorage.getItem('cardSelected');
    cardSelected = JSON.parse(cardSelected);

    useEffect(() => {
        const abortController = new AbortController();
        readCards(abortController.signal, deckId)
        .then(setCards)
        .catch(setError);
        return () => abortController.abort();
    },[count]);

    // console.log(deckSelected);
    const listCards = cards.map((card,idx) => (
        <CardList card = {card} deckSelected = {deckSelected}/>
    ))

    return (
        <>
        <Errors error = {error} />
        <div>
            <Switch>
                <Route exact path = {url}>
                    <h1> {deckSelected.deck_name} </h1>
                    {listCards}
                    <div>
                    <Link to = {`${url}/new`} >
                        <button> Create Card </button>
                    </Link>
                    </div>
                </Route>

                <Route path = {`${url}/new`}>
                    <CreateCard deckSelected = {deckSelected} count = {count} setCount = {setCount}/>
                </Route>
                <Route path = {`${url}/view-card`}>
                    <Card cardSelected = {cardSelected}/>
                </Route>
            </Switch>
        </div>
        </>
    )
}
