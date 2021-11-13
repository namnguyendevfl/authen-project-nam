import React, { useState } from "react";
import { RightArrow } from "../svg";
import AddChapter from "./Chapter";
export default function Add({setOptionSelected}) {
    const rightArrow = RightArrow();
    const[addOption, setAddOption] = useState(null)
    const options = ['Chapter', 'Section']
    const addMenu = options.map((option) => (
        <li className = "col-6 m-0 pe-2 ps-0 py-0 list-group-item d-flex align-items-center border-white">
            <button className = "d-flex list-group-item w-100 book-option justify-content-center"
                    onClick = {() => setAddOption(() => option)}
                    >
                {option}
            </button>
        </li> 
    )) 
    
    const add = () => {
        switch (addOption) {
            case "Chapter":
                // setOptionSelected(() => `Add ${addOption}`)
                return <AddChapter setAddOption = {setAddOption} addOption = {addOption}/>

        }
    }
    return (
        <>
        <ul className = "list-group d-flex flex-row bg-white ">
            {addMenu}
            </ul>
        <div>
            {add()}
        </div>   
        </>
    )
}