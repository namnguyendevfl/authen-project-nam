import React, { useState } from "react";
import Add from "./add";
import AddChapter from "./add/Chapter";
import BookLists from "./books";
import ChapterList from "./chapters";
import Create from "./Create";
import { Plus, ThreeDots, Search, LeftArrow } from "./svg";
import TopicList from "./topics";

export default function Layout () {
    let displayOption = window.localStorage.getItem('displayOption');
    displayOption = JSON.parse(displayOption);

    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);

    console.log(topics);
    const threeDots = ThreeDots();
    const search = Search();
    const leftArrow =LeftArrow();
    const [noteBooSelected, setNoteBooSelected] = useState(null);
    const [displayOptions, setDisplayOptions] = useState(false);
    const [optionSelected, setOptionSelected] = useState(null);
    //Set Lists to display
    
    const [displayList, setDisplayList] = useState(null);

    const optionLists = ['Add', 'Make exercises', 'Study', 'Need to improve']
   

    const listOptions = optionLists.map((option, idx) => {
        return (
        <>
        <li key = {idx} className = "m-0 p-0 list-group-item">
            <button className = "d-flex list-group-item w-100 book-option"
                   onClick = {() => setOptionSelected(() => option)}
                >
                {option}
            </button>
        </li>
        {/* <button>

        </button> */}
        </>
    )})

    const subOption = (option) => {
        switch (option) {
            case 'Add':
                return <Add setOptionSelected = {setOptionSelected}/>
            case 'Add Chapter':
                return <AddChapter />
            }
    }
    const selectedOption = (
    <>
    <div className = "d-flex align-items-center text-center my-2 p-0 ps-2">
        <button className = "d-flex align-items-center text-center btn p-0"
            onClick = {() => setOptionSelected(() => null)}
        > {leftArrow} </button>
        <h5 className = "px-2 my-0"> {optionSelected}</h5>
    </div>
    <hr className = "my-0"/>
    {subOption(optionSelected)}
    </>
    )
    
    const options = optionSelected ? selectedOption : listOptions

    const lists = () => {
        switch (displayList) {
            case 'Chapters' :
                return <ChapterList setDisplayList = {setDisplayList}/>
            case 'Topics' :
                return <TopicList />
            default:
                return <BookLists setDisplayList = {setDisplayList}/>
        }
    }
    return (
        <>
        <div className = "row">
        <div className =" col-8">
            <h4> Book 1</h4>
                    {/* <h3> Chap 8: blablabla</h3>
                    <h4> Chap 8: blablabla</h4> */}
                    <h5> Chap 8: blablabla</h5>
                    <p> This is paragraph

                    </p>
        </div>
        <div className =" col-4">
            <div className ="d-flex justify-content-between align-items-center">
            Notebooks
            {/* <div> {plus} </div> */}
            <div className ="p-2 d-flex justify-content-between">
            <div className = "optionBtn"> 
                    <button className = "p-2 optionBtn"> {search} </button>
                </div>
                <div className = "optionBtn"> 
                    <button className = "p-2 optionBtn"
                            onClick = {(e) => setDisplayOptions(() => !displayOptions)}
                    > 
                    {threeDots} </button>
                </div>
                {displayOptions
                ? <ul    className = "book-options-box list-group"
                >   {options}
                </ul>
                : null}

            </div>
            </div>

            <hr className = "m-0"/>
                {lists()}
            {/* <hr className = "m-0"/> */}
            {/* <AddChapter /> */}
            {/* <Create displayList = {displayList}/> */}
        </div>
        </div>
        </>
    )
}