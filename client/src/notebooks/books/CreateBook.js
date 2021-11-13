import React, { useState } from "react";
import { LeftArrow, Plus } from "../svg";

export default function CreateNoteBook() {
    let userIdLogin = window.localStorage.getItem('userId');
    userIdLogin= JSON.parse(userIdLogin);
    const initialChap = {
        userId: `${userIdLogin}`,
        bookId: "",
        title: "",
        content: "",
    }


    const [newNtBk, setNewNtBk] = useState(initialChap);

    const handleChange = ({ target: {name, value}}) => {
        setNewNtBk((prevNtBook) => ({
            ...prevNtBook,
            [name]: value
        }))
    };

    let prevNoteBooks = window.localStorage.getItem('notebooks');
    prevNoteBooks = JSON.parse(prevNoteBooks);
    prevNoteBooks = (prevNoteBooks !== null) ? prevNoteBooks : []
    console.log(newNtBk);
    const handleSubmit = ((event) => {
        event.preventDefault();
        prevNoteBooks.push(newNtBk)
        // window.localStorage.removeItem('notebooks')
        window.localStorage.setItem('notebooks', JSON.stringify(prevNoteBooks))
    })
    console.log(prevNoteBooks)
    return (
        <>
        <form onSubmit = {handleSubmit}>
            <div className = "d-flex justify-content-between ">
            <div className = "d-flex justify-content-between ">
            {/* <div 
            // className = "w-25"
            > */}
                <input  className = "number"
                // className = "w-100"
                id = "bookId"
                name = "bookId"
                placeholder = "#"
                value = {newNtBk.bookId}
                onChange = {handleChange}
                >
                </input>
            {/* </div>
            <div className ="w-100"> */}

                <input
                // className = "w-100"
                id = "title"
                name = "title"
                placeholder = "Add a book"
                value = {newNtBk.title}
                onChange = {handleChange}
                >
                </input>
            {/* </div> */}
            </div>
            <div className = "d-flex align-items-center px-2">
            <button 
                className = "p-0 plusBtn d-flex align-items-center justify-content-center"
                type = "submit">
                <Plus />
            </button>
            </div>
            </div>
        </form>
        </>
    )
}