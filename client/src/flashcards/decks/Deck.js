import React from "react";
import { useRouteMatch, Link } from "react-router-dom";


export default function Deck({deck, deckId, setDeckId, setDeckSelected}) {
    const { path }  = useRouteMatch();
    const handleDeckId = () => {
        setDeckId (() => deck.deck_id);
        setDeckSelected(() => deck);
        window.localStorage.setItem('deckSelected', JSON.stringify(deck));
        window.localStorage.setItem('deckId', JSON.stringify(deck.deck_id));
    }   

    return (
        <>
            <div> id = {deck.deck_id} </div>
            <div> name: {deck.deck_name} </div>
            <div> Description: {deck.deck_description} </div>
            <Link to = {`${path}/view-deck/${deck.deck_name.replaceAll(" ","-")}`} >
                <button onClick = {handleDeckId}> view </button>
            </Link>
        </>
    )
}



