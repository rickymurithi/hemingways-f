import React,{useState} from 'react';
import "../css/style.css"

function Subscribe(){
    const[formData, setValue] =useState({
        fname:'',
        lname:'',
        eml:''
    })
    function handleSubmit(e){
        e.preventDefault()
        fetch('https://hemingways-backend.herokuapp.com/subscribe',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body:JSON.stringify(formData)
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
          let form = document.querySelector('form');
          let p = document.createElement('p');
            document.getElementById('subscribe').append(p);
            p.style.fontFamily="'Poppins', sans-serif";
            p.style.fontSize="40px"
            p.innerText="Thank you for subscribing to our news letter."
            form.remove();
    }
    function handleChange(e){
        setValue((previouState)=>{
             return {...previouState, [e.target.id]:e.target.value}
        })
    }
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