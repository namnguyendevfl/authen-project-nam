import React from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import CreateDeck from "./createDecks";
export default function Deck() {
    const {path, params:{deckId}}  = useRouteMatch();
    const history = useHistory();
    console.log(path)
    // const handleDecks = () => history.push(`${path}/new`)
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    {/* <button onClick = {handleDecks}> Create Decks</button> */}
                </Route>
                <Route path = {`${path}/new`}>
                    <CreateDeck />
                </Route>
            </Switch>
        </div>
    )
}