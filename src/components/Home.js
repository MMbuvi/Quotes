import React, { useState, useEffect } from "react";
import Quotelist from "./quotelist";
import Quoteform from "./quoteform";

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
     fetch("http://localhost:3000/Quotes")
     .then(r => r.json())
     .then(d => {
         setQuotes(d)
     })
     .catch(e => console.log(e))
    },[]);

    function deleteAnItem(quoteId){
        console.log(quoteId);

        const afterDelete = quotes.filter((quote) => quote.id !== quoteId );

        setQuotes(afterDelete);
    }


    return (
        <>
        
        <Quotelist quotes={quotes} clickFunction={deleteAnItem} />
        
        <Quoteform />
    </>
    )
}




export default Home