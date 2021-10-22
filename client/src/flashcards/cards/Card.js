import React from "react";

export default function Card({cardSelected}) {
    console.log(cardSelected.front);

    return (
        <>
        <h2> Chap: {cardSelected.front} </h2>
        <p> {cardSelected.back} </p>
        </>
    )
}