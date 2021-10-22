import React from "react";
import { useHistory, useRouteMatch } from "react-router";
export default function CardList({card, deckSelected}) {
    const { url } = useRouteMatch()
    // console.log(deckSelected);
    console.log(url);
    const history = useHistory()
    const handleClick = () => {
        history.push(`${url}/view-card`)
        window.localStorage.setItem('cardSelected', JSON.stringify(card));
    }
    return (
        <>  <div>
            <button onClick = {handleClick}> Chap: {card.front}</button>
            </div>
            {/* <p> {card.back} </p> */}
        </>
        // <>
        //     <div> front: {card.front} </div>
        //     <div> back: {card.back} </div>
        // </>
    )
}