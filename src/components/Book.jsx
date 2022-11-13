import React,{useState} from 'react';
import "../css/style.css"


function Book(){
    const[formData, setValue] = useState({
        name:'',
        // lname:'',
        email:'',
        phone_number:'',
        suite:'executive_suites'
    })
    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9292/bookings',{
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
            document.getElementById('book').append(p);
            p.style.fontFamily="'Poppins', sans-serif";
            p.style.fontSize="40px"
            p.innerText="Thanks for filling the form. An agent will soon get intouch with you."
            document.querySelector('#book').querySelector('h2').remove();
            form.remove();
            document.getElementById('book').style.height='400px';
    }
    function handleChange(e){
        setValue((previouState)=>{
             return {...previouState, [e.target.name]:e.target.value}
        })
    }
    console.log(formData)
        return(
            <div id='book'>
                <h1>Welcome to Hemingways Suites deluxe</h1>
                <h2>Fill the form below to kick start your stay with us</h2>
                <div className="cont4">
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="Name">Name : </label>
                        <input required type="text" name="name" id="Name" onChange={handleChange} value={formData.name} placeholder="Enter your full name"/><br /><br />
                        {/* <label htmlFor="lname">Last name : </label>
                        <input required type="text" name="lname" id="lname" onChange={handleChange} value={formData.lname} placeholder="Enter your last name"/><br /><br /> */}
                        <label htmlFor="email">Email : </label>
                        <input className="email4"required type="email" name="email" id="email" onChange={handleChange} value={formData.email} placeholder="Enter your email" /><br /><br />
                        <label htmlFor="phone_number">Phone number : </label>
                        <input required type="text" name="phone_number" id="phone_number" onChange={handleChange} value={formData.phone_number} maxLength={10}placeholder="Enter your phone number"/> <br /> <br />
                        <label htmlFor="suite">Choose the suite you would like : </label> 
                        <select id='suite' name='suite' onChange={handleChange} value={formData.suite} >
                            <option value="executive_suites">The Executive Suites</option>
                            <option value="hemingway_suites">The Hemingway Suites</option>
                            <option value="deluxe_suites">Deluxe Suites</option>
                            <option value="blixen_suites">Blixen Suites</option>
                        </select><br />
                        <input type="submit" id='submit2'/>
                    </form>
                </div>
                
            </div>
            
        )
    }
    
    export default Book;