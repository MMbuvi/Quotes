import React from "react";

function Quoteitem ( { quote ,clickFunction  }) {
    const { id, author, quotees } = quote;

    return (
        <>
            <h2 style = {{color:"green"}} >{author}</h2>
            <p  style ={{color:"black"}}>{quotees}</p>
            <button
            onClick={() => clickFunction(id)}
            >I Don't like this quote</button>
            {/* {author === "Life" ? <button>Edit Qoute</button> : null} */}
        </>
    )
}

export default Quoteitem;