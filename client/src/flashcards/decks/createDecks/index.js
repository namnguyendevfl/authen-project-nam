import React,{ useState } from "react"
import { createDeck } from "../../../utils/api";
import { useHistory } from "react-router";
import Errors from "../../../errors";

export default function CreateDeck({userLogedIn, count, setCount}) {
    console.log(userLogedIn);
    const initalDeck = {
        deck_name: "",
        deck_description: "",
        user_id: userLogedIn.user_id,
    };

    const [deck, setDeck] = useState(initalDeck);
    const [error, setError] = useState(null);
    const handleChange = ({target: {name, value}}) => {
        setDeck ((prevDeck) => ({
            ...prevDeck,
            [name]: value,
        }))
    };
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        createDeck(deck, userLogedIn.user_id)
        .then(() => {
            history.push(`/flashcards`);
            setCount (() => count ++);
        })
        .catch(setError);
    }

    return (
        <>
        <Errors error = {error} />
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor = "deckName"> Deck name </label>
                    <input
                        id = "deckName"
                        name = "deck_name"
                        type = "text"
                        placeholder = ""
                        value = {deck.deck_name}
                        onChange = {handleChange}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor = "deckDescription"> Deck description </label>
                    <input
                        id = "deckDescription"
                        name = "deck_description"
                        type = " text"
                        placeholder = ""
                        value = {deck.deck_description}
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