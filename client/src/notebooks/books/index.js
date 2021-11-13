import React from "react";
import CreateNoteBook from "./CreateBook";

export default function BookLists({setDisplayList}) {
    let books = window.localStorage.getItem('notebooks');
    books = JSON.parse(books);
    const bookList = books.map((book, idx) => (
        <>
        <ul className = "list-group">
        <li key = {idx} className = "list-group-item m-0 p-0 border-white"> 
            <button className = "list-group-item w-100 d-flex border-white px-1"
                onClick = {() => {
                    setDisplayList (() => 'Chapters')
                    window.localStorage.setItem('bookSelected', JSON.stringify(book));
                    window.localStorage.setItem('displayOption', JSON.stringify("Chapter"));
                  
                }}
            > 
            
            {idx + 1}. {book.title} 
            </button>
        </li>
        </ul>
        </>
    ))
    return (
        <>
        <div>
            {bookList}
        </div>
        <div>
            <CreateNoteBook />
        </div>
        </>
    )
}