import React, { useState } from "react";
import { useHistory } from "react-router";

export default function CreateBook() {
    const initBook = {
        title: "",
        description: ""
    }
    const history = useHistory();
    const [book, setBook] = useState(initBook);
    const handleChange = ({ target : { name, value } }) => {
        setBook(() => ({
            ...book,
            [name]: value
        }))
    }
    
    console.log(book);

    return (
        <>
        <form onSubmit = "handleSubmit">
            <fieldset>
                <legend> Create book </legend>
                <div>
                    <label htmlFor = "title"> Title </label>
                    <input 
                    id = "title"
                    name = "title"
                    
                    value = {book.title}
                    onChange = {handleChange}
                    >
                    </input>
                </div>
                <div >
                    <label htmlFor = "description"> Description </label>
                    <input
                    id = "description"
                    name = "description"

                    value = {book.description}
                    onChange = {handleChange}
                    >
                    </input>
                </div>
                <div>
                    <button type = "submit">
                        Submit
                    </button>
                </div>
            </fieldset>
        </form>
        <div>
        <button>
            Create Chapter
        </button>
        </div>
        <div>
        <button onClick = {(e) => history.push("/notebooks")}>
            books
        </button>
        </div>
        </>
    )
}