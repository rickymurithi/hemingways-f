import React,{useState,useEffect} from 'react';
import img from '../images/hemingways.png';
import deluxe from '../images/deluxe_suite.jpg';
import "../css/style.css"
import { Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import Subscribe from './Subscribe';



function Home() {
 const match=useRouteMatch()
 //console.log(match)
//  const [changedComment,setComment]=useState('')
 const [feedbacks, setFeedback]=useState([]);
 useEffect(()=>{
    fetch(`https://powerful-escarpment-81140.herokuapp.com/feedbacks`)
    .then(res=>res.json())
    .then(data=>setFeedback(data))

 },[])
console.log('This the fetch data',feedbacks)
function handleBlur(e){
    console.log(e.target.innerText)
    // //console.log(typeof(e.target.innerText))
    // setComment(previousState=>{
    //     previousState=e.target.innerText
    //     return previousState;
    // })
    // console.log('This is new comment:',changedComment)
    // // console.log("handle Blur")

       fetch(`https://powerful-escarpment-81140.herokuapp.com/feedbacks/${e.target.id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify({"comment":e.target.innerText})
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
}

 const cards=feedbacks.map(feedback=>{
    return (
    <div key={feedback.id} className="feedbackCard" >
        <h1>{feedback.rating}</h1>
        <p contentEditable='true' onBlur={handleBlur} id={feedback.id}>{feedback.comment}</p>
        <img src={feedback.photo_url} alt='img' />
        <p>{feedback.name}</p>
        <button onClick={handleDelete}  id={feedback.id}>x</button>
    </div>)
 })

 //console.log(feedbacks)
 function handleDelete(e){
    const newfeedbacks=feedbacks.filter(item=>{
        // console.log(e.target)
        // console.log(item.id)
       return item.id !== parseInt(e.target.id)
    })

    setFeedback(newfeedbacks)
    console.log('This is newfeedback:',newfeedbacks)
    
    fetch(`https://powerful-escarpment-81140.herokuapp.com/feedbacks/${e.target.id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
}
    return (
        <div className='container1'>
            <div className='container2'>
                <img src={img} alt="resort" />
            </div>
            <div className="container">
                <div className='container3'>
                    <p>A warm welcome to Hemingways Nairobi. A luxury five Star boutique hotel in Nairobi. We pride ourselves on providing exceptional guest experiences and service, ensuring the utmost comfort and luxury.</p>
                </div>
                <div className="cont">
                    <div className='container4'>
                        <p>Your dedicated butler will know that you prefer Earl Grey to Assam with your scones, and will remember which trousers you like pressed flat and which ones need a central crease.<br />So while you are indulging in the spa, relaxing beside the pool or meandering through the gardens, back in your suite, your butler will have dimmed the lights, adjusted your personalized pillows, set out your nightcap and arranged the morning’s outing down to the finest detail.</p>
                    </div>
                    <div className='container5'>
                        <p>This 45-suite boutique hotel elevates the standard of luxury for travellers in the region. Beautiful in its symmetry and flooded with natural light, this plantation-style property is airy and spacious. Each of our 80m² suites have a private balcony overlooking the iconic silhouette of the Ngong Hills, a magical view which can also be enjoyed over sundowners at the Bar.<br /> <br />Our service is personal and sincere, offering a luxury experience from the moment you touchdown in Kenya.</p>
                    </div>
                </div>
            </div>
            <div className="container6">
                <div className='container7'>
                    <h2>PERSONALISED AND BESPOKE</h2>
                    <h1>FOR DISCRETION</h1>
                    <h2>AND CONVENIENCE</h2>
                    <button className='btn'>BUTLER SERVI    CE</button>
            </div>

            </div>
            {/*  Rooms  */}

            <div className="container8">
                <img src={deluxe} alt="rooms" />
                <div className="cont9">
                    <h5>Suites</h5>
                    <h1>Deluxe rooms</h1>
                    <p>These spacious rooms are 80m² and are located on the ground floor of each wing. Each room features a seating area and private terrace. Large en-suite bathrooms feature walk-in closets, double vanity units and separate bath, shower and WC.</p>
                    <button className='btn1'>Room Details</button>
                </div>
            </div>
                {/* Feedback */}

            <hr />
            <div className="cont2">
                <h1>What our customers have to say about us</h1>
                <div className='fcontainer'>

                    {cards}
                </div>
            </div>
            

            <Route exact path={`${match.url}`}>
                <Subscribe/>
            </Route>
            
        </div>


    )
}

export default Home;