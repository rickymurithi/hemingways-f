import React from 'react';
import { NavLink} from 'react-router-dom';
import "../css/style.css"
import img from "../images/moringa_hostel_logo.png"


function Navbar(){

    return(
        <nav>
            <div><NavLink   to="/" id='img-navlink'>
                <img src={img} alt="logo" id='logo'/>
            </NavLink>
            </div>
             <div>
                <NavLink   to="/"  className="navlink" id='header'>
                Hemingways 
                </NavLink>
             </div>
        
           <div className='container1-nav'>
                <NavLink   to="/" className="navlink">
                    Explore
                </NavLink>
                <NavLink   to="/products" className="navlink">
                    Our products
                </NavLink>
                <NavLink   to="/offers" className="navlink">
                    Offers & Discounts
                </NavLink>
                <NavLink   to="/contact" className="navlink">
                    Contact us
                </NavLink>
                <NavLink   to="/feedback" className="navlink">
                    Get back to us
                </NavLink>
           </div>
           <div>
           <NavLink   to="/book" className="navlink">
                <button id='navButton'>BOOK</button>
            </NavLink>
           </div>
           
        </nav>
    )
}

export default Navbar;