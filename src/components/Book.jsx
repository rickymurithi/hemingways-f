import React,{useState} from 'react';
import "../css/style.css"

function Book(){
    const[formData, setValue] =useState({
        fname:'',
        lname:'',
        email:'',
        number:'',
        type:'executive_suites'
    })
  }
  return(
    <div id='book'>
        <h1>Welcome to Hemingways Suites deluxe</h1>
        <h2>Fill the form below to kick start your stay with us</h2>
        <div className="cont4">
            <form onSubmit={handleSubmit} >
                <label htmlFor="fname">First name : </label>
                <input required type="text" name="fname" id="fname" onChange={handleChange} value={formData.fname} placeholder="Enter your first name"/><br /><br />
                <label htmlFor="lname">Last name : </label>
                <input required type="text" name="lname" id="lname" onChange={handleChange} value={formData.lname} placeholder="Enter your last name"/><br /><br />
                <label htmlFor="email">Email : </label>
                <input classname="email4"required type="email" name="email" id="email" onChange={handleChange} value={formData.email} placeholder="Enter your email" /><br /><br />
                <label htmlFor="number">Phone number : </label>
                <input required type="text" name="no." id="number" onChange={handleChange} value={formData.number} maxLength={10}placeholder="Enter your phone number"/> <br /> <br />
                <label htmlFor="type">Choose the suite you would like : </label> 
                <select id='type' onChange={handleChange} value={formData.type} >
                    <option value="executive_suites">The Executive Suites</option>
                    <option value="himingway_suites">The Hemingway Suites</option>
                    <option value="deluxe_suites">Deluxe Suites</option>
                    <option value="blixen_suites">Blixen Suites</option>
                </select><br />
                <input type="submit" id='submit2'/>
            </form>
        </div>
        
    </div>
    
)

export default Book;