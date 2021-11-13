import React, { useState } from "react";
import { LeftArrow, Plus } from "../svg";

export default function AddChapter() {
    const initialChap = {
        bookId: "",
        chapterId: "",
        title: "",
    }


    const [chapter, setChapter] = useState(initialChap);

    const handleChange = ({ target: {name, value}}) => {
        setChapter ((prevChap) => ({
            ...prevChap,
            [name]: value
        }))
    };

    let addChapter = window.localStorage.getItem('addChapter');
    addChapter = JSON.parse(addChapter);

    console.log(addChapter);
    const handleSubmit = ((event) => {
        event.preventDefault();
        window.localStorage.setItem('addChapter', JSON.stringify(chapter))
    })
    console.log(chapter)
    return (
        <>
        <form onSubmit = "handleSubmit">
            <div className ="titleBox">
                <label  htmlFor = "title">Title: </label>
                <input  
                id = "title"
                name = "title"
                value = {chapter.title}
                onChange = {handleChange}
                >
                </input>
            </div>
            <div>
                <label htmlFor = "number">Position:
                </label>
                <input
                id = "number"
                name = "number"
                value = {chapter.chapterId}
                onChange = {handleChange}
                >
                </input>
            </div>
            <button type = "submit">
                Add
            </button>
        </form>

        <form onSubmit = {handleSubmit}>
            <div className = "d-flex justify-content-between ">
            <div className = "d-flex justify-content-between ">
            <div className = "w-25">
                <input  
                className = "w-100"
                id = "number"
                name = "number"
                placeholder = "#"
                value = {chapter.chapterId}
                onChange = {handleChange}
                >
                </input>
            </div>
            <div className ="w-100">

                <input
                className = "w-100"
                id = "title"
                name = "title"
                placeholder = "Add title"
                value = {chapter.title}
                onChange = {handleChange}
                >
                </input>
            </div>
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