import React from "react"
import Deck, { ViewCardUrl } from "./Deck";

export default function Decklist({decks}) {
    const listDeck = decks.map((deck,idx) => (
        <>
            <Deck key = {idx} deck = {deck} />
            {/* <ViewCardUrl deck = {deck} /> */}
        </>)
    );
    return (
        <>
        {listDeck}
        </>
    )
}