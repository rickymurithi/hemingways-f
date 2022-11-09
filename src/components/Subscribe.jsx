import React,{useState} from 'react';
import "../css/style.css"

function Subscribe(){
    
    return(

        <div className="container9">
         <div className="container10" id="subscribe">
             <h1>We'd like to keep in touch</h1>
             <p>Subscribe to our news letter</p>
             <form id="form" onSubmit={handleSubmit}>
                 <label className="label" htmlFor="fname"> First Name: </label>
                 <input className="input" type="text" id="fname" name="firstName" onChange={handleChange} value={formData.fname} required/><br/>
                 <label className="label" htmlFor="lname">Last Name: </label>
                 <input className="input" type="text" id="lname" name="lastName" onChange={handleChange} value={formData.lname} required/><br/>
                 <label className="label" htmlFor="email1">Email: </label>
                 <input className="input" type="email" id="eml" name="email" onChange={handleChange} value={formData.eml} required/><br/>
                 <input type="submit" value="Subscribe" id="submit"/><br/>
             </form>
         </div>
         </div>
     
     )
}

export default Subscribe;