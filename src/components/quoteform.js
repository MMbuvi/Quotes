import React from "react";
import { useState } from "react";

function Quoteform() {

  const [ formData , setFormData ] = useState({
    name  : "",
    quote : ""
})

function handleSubmit(e){
  e.preventDefault();
  console.log("submitting Form")
}

function handleChange(e){
 
  setFormData({...formData,[e.target.name] : [e.target.value]})
  console.log(formData);
  console.log("Fire up handlechange event")
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
         Name :  <input type="text" value={formData.name} onChange={handleChange}/>
          </label>
          <label>
            Qoute : <input type="text" value={formData.quote} onChange={handleChange}/>
          </label>
        <input type="submit"/>
      </form>
    </>
  );
}

export default Quoteform;
