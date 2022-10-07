import React from "react";

function Quoteitem ( { quote ,clickFunction }) {
    const { id, author, quotees } = quote;

    return(
        <>
        <h2>{author}</h2>
        <p>{quotees}</p>
        <button className="button" style = {{"background-color":"blue"}}
        onClick={() => clickFunction(id)}
        >I Don't like this quote</button>
        {/* {author === "Life" ? <button>Edit Qoute</button> : null} */}
    </>
    )
}

export default Quoteitem