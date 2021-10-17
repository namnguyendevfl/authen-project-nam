import React from "react";
import { DeckId, ViewDeckUrl } from "../decks/Deck";
import { useRouteMatch  } from "react-router";
import { Switch, Route, Link } from "react-router-dom";
import CreateCard from "./CreateCard";
let API_URL;

let deckId;
export default function Cards() {
    const {url, path, params:{deckId}}  = useRouteMatch();
    API_URL = url
    // deckUrl = url;
    console.log(url);
    console.log(path);

    console.log(DeckId());
    return (
        <div>
            <Switch>
                <Route exact path = {url}>
                    This is card list
                    <div>
                    <Link to = {`${url}/new`} >
                        <button> Create Card </button>
                    </Link>
                    </div>
                </Route>

                <Route path = {`${url}/new`}>
                    <CreateCard />
                </Route>
            </Switch>
        </div>
    )
}


export const CardsUrl = () => API_URL