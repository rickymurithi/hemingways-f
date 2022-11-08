import React from 'react';
import {Link} from 'react-router-dom';
import img from '../images/google-play-logo-10629.png'


function Footer(){

    return(
        <>
        <div className="container11">
            <div className="container15">
                <h1>Hemingway hotel chain & Suites</h1>
                <p>Home of delight</p>
                <Link to='#'className="fa fa-twitter"></Link>
                <Link to='#'className="fa fa-facebook"></Link>
                <Link to='#'className="fa fa-instagram"></Link>
               
                <h1>Get the app</h1>
                <div className="container12">
                    <i className="fa fa-apple"></i>
                    <h6>Download on the app store</h6>
                    <h4>App Store</h4>
                </div>
                <div className="container13">
                    <img src={img} alt="google-play"/>
                    <h6>Get it on</h6>
                    <h4>Google play</h4>
                </div>
            </div>
            <div className="container14">
                <div>
                    <h1 className="footerh1">Company</h1>
                    <ul>
                        <li>About</li>
                        <li>Products</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h1 className="footerh1">Products</h1>
                    <ul>
                        <li>The Executive suites</li>
                        <li>The Hemingway suites</li>
                        <li>Deluxe Suites</li>
                        <li>Blixen Suites</li>
                        <li id="more"><Link to='#'>More ...</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="footerh1">Others</h1>
                    <ul>
                        <li>FAQs</li>
                        <li>Terms of service</li>
                        <li>Privacy and Policy.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container16">
            <h1>All rights reserved. Terms & conditions apply.</h1>
        </div>
        </>
    )
}