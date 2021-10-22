import React, { useState } from "react"
import Errors from "../../../errors";
import { useHistory } from "react-router";
import { createCard } from "../../../utils/api";


export default function CreateCard({setCount, count}) {
  
    //Get logedInUder and deckId from localStorage
    let matchUser = window.localStorage.getItem('login');
    matchUser = JSON.parse(matchUser);
    let deckId = window.localStorage.getItem('deckId');
    deckId = JSON.parse(deckId);

    let deckSelected = window.localStorage.getItem('deckSelected');
    deckSelected = JSON.parse(deckSelected);

    const initialCard = {
        front: "",
        back: "",
        deckId: deckId,
        userId: matchUser[0].user_id
    }

    console.log(deckSelected);
    const [card, setCard] = useState(initialCard);
    const [error, setError] = useState(null);

    const handleChange = ({target: {name, value}}) => {
        setCard((prevCard) => ({
            ...prevCard,
            [name]: value
        }))
    }

    const history = useHistory();

    //history.push then setCount
    const handleSubmit = (event) => {
        event.preventDefault();
        createCard(card)
        .then(() => {
            history.push(`/flashcards/view-deck/${deckSelected.deck_name.replaceAll(" ","-")}`)
            setCount(() => count ++);
        })
        .catch(setError);
    }

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