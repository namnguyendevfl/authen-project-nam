import React from "react";
import { Switch, Route, useRouteMatch, useHistory, Link } from "react-router-dom";
import { API_URL } from "../../utils/api";
import Cards from "../cards";

let url;
let deckId
export default function Deck({deck}) {
    const { path }  = useRouteMatch();
    const history = useHistory();
    // console.log(path)
    console.log(deck);
    url = `${path}/view-deck/${deck.deck_id}`
    const setDeckId = () => {
        deckId = deck.deck_id;
    }   
    // console.clear();
    console.log(deckId)
    return (
        <>
            <div> id = {deck.deck_id} </div>
            <div> name: {deck.deck_name} </div>
            <div> Description: {deck.deck_description} </div>
            <Link to = {`${path}/view-deck/${deck.deck_name.replaceAll(" ","-")}`} >
                <button onClick = {setDeckId}> view </button>
            </Link>
            {/* <Switch>
                <Route exact path = {path}>
                    Here we are 
                </Route>
                <Route path = {`${path}/:deckId`} >
                    <Cards />
                    This is Cards
                </Route>
            </Switch> */}
        </>
    )
}


export const DeckId = () => deckId;
export const ViewDeckUrl = () => url

