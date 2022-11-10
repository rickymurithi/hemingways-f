import React,{useState, useEffect} from 'react';
import "../css/style.css"



function Offers(){
const [offers, setOffer]=useState([]);
useEffect(()=>{
    fetch('https://hemingways-backend.herokuapp.com/offers')
    .then(res=>res.json())
    .then(data=>setOffer(data))
},[])

 const cards=offers.map((offer)=>{
    return (
    <div key={offer.type} className="offerCard">
        <img src={offer.imgUrl} alt={offer.type} />
        <h1>{offer.type}</h1>
        <p>Current price:{offer.currentPrice}</p>
        <p>Previous price:{offer.previousPrice}</p>
        <p>{offer.off} off</p>
    </div>)
 })
    return (

       <div className='cont5'>
        <h1>Current offers</h1>
        <h2>Get them while on discount!!</h2>
        {cards}
        </div>
    
    )
}

export default Offers;