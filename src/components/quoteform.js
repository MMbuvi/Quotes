import React from "react";

function Quoteform( { author, quotees , changeAuthor, changeQuotee , submitEvent }) {

  return (
    <>
      <h3>ADD YOUR QUOTE</h3>
      <form onSubmit={submitEvent}>
        <label>
         Author :  <input type="text" value={author} onChange={changeAuthor}/>
          </label>
          <br/>
          <label>
            Qoute :  <input type="text" value={quotees} onChange={changeQuotee}/>
          </label>
          <br/>
        <input type="submit"/>
      </form>

      <div>
          <h3> Author: {author}</h3>
          <h3>Quote:  {quotees}</h3>
      </div>
    </>
  );
}

export default Quoteform;
