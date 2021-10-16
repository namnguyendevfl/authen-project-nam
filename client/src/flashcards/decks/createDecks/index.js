import React,{ useState } from "react"
import { createDeck } from "../../../utils/api";
import { useHistory, useRouteMatch } from "react-router";
import Errors from "../../../errors";

export default function CreateDeck() {

    const initalDeck = {
        deck_name: "",
        deck_description: ""
    };

    const [deck, setDeck] = useState(initalDeck);
    const [error, setError] = useState(null);

    const handleChange = ({target: {name, value}}) => {
        setDeck ((prevDeck) => ({
            ...prevDeck,
            [name]: value,
        }))
    };

    const {path, params:{deckId}}  = useRouteMatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        createDeck(deck)
        .then(() => history.push(`/flashcards`))
        .catch(setError);
    }

    console.log(deck);

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