import React from "react";
import "./index.css";
import { useHistory, useRouteMatch, Switch, Route } from "react-router";
import CreateBook from "./CreateBook";

export default function Notebook() {
    const history = useHistory();
    const { url } = useRouteMatch();
    console.log(url)

    return (
        <>


        <Switch>
            <Route exact path = {url}>
                <button onClick = {(e) => history.push("/notebooks/new")}>Create book</button>
                    <h1> Book 1</h1>
                    <h2> Chap 8: blablabla</h2>
                    <p> This is paragraph

                    </p>
            </Route>
            <Route path = {`${url}/new`}>
                <CreateBook />
            </Route>
        </Switch>
        </>
    )
}