import React, { useState } from "react";
import { LeftArrow, Plus } from "../svg";

export default function CreateChapter() {
    let bookSelected = window.localStorage.getItem('bookSelected');
    bookSelected = JSON.parse(bookSelected);
    const initChap = {...bookSelected,
        chapterId: "",
        title: "",
        content:"",
    }

    const [newChap, setNewChap] = useState(initChap);

    const handleChange = ({ target: {name, value}}) => {
        setNewChap((prevChap) => ({
            ...prevChap,
            [name]: value
        }))
    };

    console.log(newChap)
    let prevChapters = window.localStorage.getItem('chapters');
    prevChapters = JSON.parse(prevChapters);
    prevChapters = (prevChapters !== null) ? prevChapters : []
    // console.log(newNtBk);
    const handleSubmit = ((event) => {
        event.preventDefault();
        prevChapters.push(newChap)
        // window.localStorage.removeItem('chapters')
        window.localStorage.setItem('chapters', JSON.stringify(prevChapters))
    })
    console.log(prevChapters)
    return (
        <>
        <form onSubmit = {handleSubmit}>
            <div className = "d-flex justify-content-between ">
            <div className = "d-flex justify-content-between ">
            {/* <div className = "w-25"> */}
                <input  
                className = "number"
                id = "chapterId"
                name = "chapterId"
                placeholder = "#"
                value = {newChap.chapterId}
                onChange = {handleChange}
                >
                </input>
            {/* </div>
            <div className ="w-100"> */}

                <input
                // className = "w-100"
                id = "title"
                name = "title"
                placeholder = "Add a chapter"
                value = {newChap.title}
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