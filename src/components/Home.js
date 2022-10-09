import React, { useState, useEffect } from "react";
import Quotelist from "./quotelist";
import Quoteform from "./quoteform";

import { Link, Route , Switch  } from 'react-router-dom';
const linkstyle = {
    "background-color" : '',
    'display' : 'inline-block',
    "padding" : "1.5rem ",
    "margin-left" : "25%"
};
function Navigation(){
    return (
        <div className = "Link"> 
            <Link to="/" style = {linkstyle}>Home</Link>
            
            <Link to="/form" style = {linkstyle}>Add Quote</Link>
        </div>
    )
}


function Home () {
    const [ quotes , setQuotes ] = useState([]); 
    const [ author, setAuthor ] = useState("");
    const [ quotees, setQuotees ] = useState("");
    const [ formData, setFormData ] = useState({ author : author, quotees : quotees });

    function changeAuthor(event){
        setAuthor(event.target.value);
        setFormData({...formData,author : author});
    }

    function changeQuotee(event){
        setQuotees(event.target.value)
        setFormData({...formData,quotees : quotees});
    }
    
     
    function handleSubmit(event){
        event.preventDefault();
    
      fetch("http://localhost:3000/Quotes",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData)
      })
      .then(r => r.json())
      .then(() => {
        setQuotes([...quotes,formData])
    })
      .catch(e => console.log(e))

      setFormData({
        author : "",
        quotees : ""
      });

    }
    
    useEffect(() => {
     fetch("https://thawing-coast-99369.herokuapp.com/quotes")
     .then(r => r.json())
     .then(d => {
         setQuotes(d)
     })
     .catch(e => console.log(e))
    },[]);

    function deleteAnItem(quoteId){
        const afterDelete = quotes.filter((quote) => quote.id !== quoteId );
        setQuotes(afterDelete);
    }


    return (
    <div>
        <Navigation />
        <Switch>
            <Route path="/form">
                <Quoteform submitEvent={handleSubmit} quotes={quotes} author={author} quotees={quotees} changeAuthor={changeAuthor} changeQuotee={changeQuotee}/>
            </Route>

            <Route path="/">
                <Quotelist quotes={quotes} clickFunction={deleteAnItem}/>
            </Route>
        </Switch>
    </div>
    )
}




export default Home