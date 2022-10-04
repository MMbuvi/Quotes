import React from "react";
import Quoteitem from "./quoteitem";

function Quotelist( { quotes , clickFunction  }){
    
    return(
        <>
        <h1>this should be your quote list</h1>
        {quotes.map((item) => {
                return  <Quoteitem  key={item.id} quote={item} clickFunction={clickFunction}/>
        })}
        </>
    )
}
 export default Quotelist