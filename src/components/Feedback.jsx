import React,{useState} from 'react';
import "../css/style.css"


function Feedback(){
    const[formData, setValue] =useState({
        rating:'',
        comment:'',
        name:'',
        photo_url:''
    })
    function handleSubmit(e){
        e.preventDefault();
        fetch('https://powerful-escarpment-81140.herokuapp.com/feedbacks',{
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
            document.getElementById('feedback').append(p);
            p.style.fontFamily="'Poppins', sans-serif";
            p.style.fontSize="40px"
            p.innerText="Thank you for your feedback. Hope to see you back!!!."
            document.querySelector('#feedback').querySelector('h2').remove();
            form.remove();
            document.getElementById('feedback').style.height='400px';
    }
    function handleChange(e){
        setValue((previouState)=>{
             return {...previouState, [e.target.id]:e.target.value}
        })
    }
    //console.log(formData)
        return(
            <div id='feedback'>
                <h1>Hope you had an awesome stay with us</h1>
                <h2>You can fill the form below to tell us about your experience</h2>
                <div className="cont3">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="rating">Rating:</label>
                        <input required type="text" name="Rating" id="rating" onChange={handleChange} value={formData.rating} placeholder='use ⭐⭐⭐⭐⭐ emojis'/><br /><br />
                        <label id='comm' htmlFor="comment">Comment:</label>
                        <textarea required name="Comment" id="comment" cols="30" rows="10" placeholder='write your comments here ..' onChange={handleChange} value={formData.comment}></textarea><br /><br />
                        <label htmlFor="name">Name:</label>
                        <input required type="text" name="Name" id="name" onChange={handleChange} value={formData.name} placeholder="Enter name" maxLength={20}/><br /> <br />
                        <label htmlFor="imgUrl">Your photo url:</label>
                        <input required type="text" name="image_url" id="photo_url" onChange={handleChange} value={formData.photo_url}placeholder="Enter Img url"/> <br />
                        <input type="submit" id='submit1'/>
                    </form>
                </div>
            </div>
            
        )
    }
    
    export default Feedback;