import React, { useState } from "react";
import { Plus } from "./svg";


export default function Create({displayList}) {
    let chapterSelected = window.localStorage.getItem('chapterSelected');
    chapterSelected = JSON.parse(chapterSelected);
    let bookSelected = window.localStorage.getItem('bookSelected');
    bookSelected = JSON.parse(bookSelected);

    // let displayOption = window.localStorage.getItem('displayOption');
    // displayOption = JSON.parse(displayOption);
    // window.localStorage.setItem('displayOption', JSON.stringify("Topic"));

    console.log(displayList);
    let id = 'chapterId';
    let idValue;
    const chapterIdSelected = (displayList === "Topics") ? chapterSelected.chapterId : ""
    
    console.log(chapterIdSelected);
    const initState = {
        userId: `${bookSelected.userId}`,
        bookId: `${bookSelected.bookId}`,
        chapterId: `${chapterIdSelected}`,
        title: "",
    }

    // initState = {...bookSelected,
    //     chapterId: "",
    //     title: "",
    //     content: "",
    // }


    // switch (displayOption) {
    //     case 'Chapter':
    //         initState = {...bookSelected,
    //             chapterId: "",
    //             title: "",
    //             content: "",
    //         }
    //         id = "chapterId";
    //         break;
    //     case 'Topic':
    //         initState = {...chapterSelected,
    //             topicId: "",
    //             title: "",
    //             content: "",
    //         }
    //         id = "topicId"
    //         break;
    //     default:
    //         initState = {
    //             title: "",
    //             content: "",
    //         }
    // }

    // console.log(displayOption)
    const [newState, setNewState] = useState(initState);
    // console.log(bookSelected);
    // console.log(chapterSelected)
    console.log(newState)
    // let bookSelected = window.localStorage.getItem('bookSelected');
    // bookSelected = JSON.parse(bookSelected);


    

    

    const handleChange = ({ target: {name, value}}) => {
        setNewState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    };

   
    let prevTopics = window.localStorage.getItem('topics');
    prevTopics = JSON.parse(prevTopics);
    prevTopics = (prevTopics !== null) ? prevTopics : []
    // console.log(newNtBk);
    const handleSubmit = ((event) => {
        event.preventDefault();
        prevTopics.push(newState)
        // window.localStorage.removeItem('chapters')
        window.localStorage.setItem('topics', JSON.stringify(prevTopics))
    })
    // console.log(prevTopics)
    return (
        <>
        <form onSubmit = {handleSubmit}>
            <div className = "d-flex justify-content-between ">
            <div className = "d-flex justify-content-between ">
            <div className = "w-25">
                <input  
                className = "w-100"
                id = "chapterId"
                name = {`${id}`}
                placeholder = "#"
                value = {newState.chapterId}
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
                value = {newState.title}
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