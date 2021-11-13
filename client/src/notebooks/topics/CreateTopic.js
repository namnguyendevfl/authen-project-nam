import React, { useState } from "react";
import { LeftArrow, Plus } from "../svg";

export default function CreateTopic() {
    let chapterSelected = window.localStorage.getItem('chapterSelected');
    chapterSelected = JSON.parse(chapterSelected);
    const initTopic = {
        userId: `${chapterSelected.userId}`,
        bookId: `${chapterSelected.bookId}`,
        chapterId: `${chapterSelected.chapterId}`,
        topicId: "",
        title: "",
        content:"",
    }

    const [newTopic, setNewTopic] = useState(initTopic);

    const handleChange = ({ target: {name, value}}) => {
        setNewTopic((prevTopic) => ({
            ...prevTopic,
            [name]: value
        }))
    };

    let prevTopics = window.localStorage.getItem('topics');
    prevTopics = JSON.parse(prevTopics);
    prevTopics = (prevTopics !== null) ? prevTopics : []
    // console.log(newNtBk);
    const handleSubmit = ((event) => {
        event.preventDefault();
        prevTopics.push(newTopic)
        // window.localStorage.removeItem('chapters')
        window.localStorage.setItem('topics', JSON.stringify(prevTopics))
    })
    console.log(prevTopics)
    return (
        <>
        <form onSubmit = {handleSubmit}>
            <div className = "d-flex justify-content-between ">
            <div className = "d-flex justify-content-between ">
            {/* <div className = "w-25"> */}
                <input  
                className = "number"
                id = "topicId"
                name = "topicId"
                placeholder = "#"
                value = {newTopic.topicId}
                onChange = {handleChange}
                >
                </input>
            {/* </div>
            <div className ="w-100"> */}

                <input
                // className = "w-100"
                id = "title"
                name = "title"
                placeholder = "Add a topic"
                value = {newTopic.title}
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