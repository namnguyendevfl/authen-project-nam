import React from "react";
import CreateChapter from "./CreateChapter";

export default function ChapterList({setDisplayList}) {
    let chapters = window.localStorage.getItem('chapters');
    chapters = JSON.parse(chapters);
    chapters = (chapters) ? chapters : [];
    // const initChapter = {
    //     userId: "",
    //     bookId: "",
    //     ChapterId: "",
    //     title: "",
    //     content:"",
    // }
    // const chapters = ['Hello world', 'Create UI via react-app', 'Create server', 'Connect-it-all']
    const chapterList = chapters.map((chapter, idx) => (
        <>
        <li key = {idx} className = "list-group-item m-0 p-0 border-white"> 
            <button className = "list-group-item w-100 d-flex border-white px-1"
                    onClick = {(e) => {
                        setDisplayList(() => 'Topics')
                        window.localStorage.setItem('chapterSelected', JSON.stringify(chapter));
                        window.localStorage.setItem('displayOption', JSON.stringify("Topic"));
                    }}
                    > 
                
                <span className = "text-start"> {chapter.chapterId}. {chapter.title} </span>
            </button>
        </li>
        </>
    ))
    return (
    <>
    <ul className = "list-group">
        {chapterList}
    </ul>
    <div>
        <CreateChapter />
    </div>
    </>
    )
}