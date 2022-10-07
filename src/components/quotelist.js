import React from "react";
import Quoteitem from "./quoteitem";

function Quotelist( { quotes , clickFunction  }){
    
    return(
        <>
        <h1 style = {{color : "maroon"}}>Quotes: </h1>
        {quotes.map((item) => {
                return  <Quoteitem key={item.id} quote={item} clickFunction={clickFunction}/>
        })}
        </>
    )
}

 export default Quotelist