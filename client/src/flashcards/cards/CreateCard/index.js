import React, { useState } from "react"
import Errors from "../../../errors";
import { DeckId } from "../../decks/Deck";
import { useHistory } from "react-router";
import { createCard } from "../../../utils/api";

export default function CreateCard() {
    let matchUser = window.localStorage.getItem('login');
    matchUser = JSON.parse(matchUser);

    const initialCard = {
        front: "",
        back: "",
        deckId: DeckId(),
        userId: matchUser[0].user_id
    }

    const [card, setCard] = useState(initialCard);
    const [error, setError] = useState(null);

    const handleChange = ({target: {name, value}}) => {
        setCard((prevCard) => ({
            ...prevCard,
            [name]: value
        }))
    }

    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        createCard(card)
        .then(() => history.push("/flashcards"))
        .catch(setError);
    }

    console.log(card);

    return (
        <>
        <Errors error = {error} />
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor = "cardFront"> Front </label>
                    <input
                        id = "cardFront"
                        name = "front"
                        type = "text"
                        placeholder = ""
                        value = {card.front}
                        onChange = {handleChange}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor = "cardBack"> Back </label>
                    <input
                        id = "cardBack"
                        name = "back"
                        type = " text"
                        placeholder = ""
                        value = {card.back}
                        onChange = {handleChange}
                    >
                    </input>
                </div>
                <div>
                    <button>
                        Cancel
                    </button>
                    <button type = "submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}