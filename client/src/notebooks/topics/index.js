import React from "react";
import CreateTopic from "./CreateTopic";

export default function TopicList() {
    // const topics = ['part1', 'part2', 'part3', 'part4']
    let topics = window.localStorage.getItem('topics');
    topics = JSON.parse(topics);
    const topicList = topics.map((topic, idx) => (
        <>
        <li key = {idx} className = "list-group-item m-0 p-0 border-white"> 
            <button className = "list-group-item w-100 d-flex border-white px-1"> 
            <span className = "text-start"> {topic.topicId}. {topic.title} </span>
            </button>
        </li>
        </>
    ))
    return (
        <>
            <ul className = "list-group">
                {topicList}
            </ul>
            <CreateTopic />
            
        </>
    )
}