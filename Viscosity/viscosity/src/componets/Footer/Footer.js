import React, { Component } from 'react';
import Button from "../Button/Button.js";
import './Footer.css';
import{
  Link, 
} from "react-router-dom"


class Footer extends Component {
  render() {
    return(
      <div className="footer">
   <div className="left-content">
      <div>
         &copy; 2018 VPS Media Group. All Rights Reserved.
         <Link to="/privacy-policy" rel="nofollow">
         Privacy Policy.</Link>
      </div>
      <div>
         <Link to="/about">
         ABOUT</Link> &middot; 
         <Link to="/contact">
         CONTACT</Link> &middot; 
         <Link to="/blog">
         BLOG</Link> &middot; 
         <Link to="/career">
         CAREER</Link>
      </div>
   </div>
   <div className="right-content">
      <div>1007 North Orange Street, 4th Floor Wilmington, DE 19801</div>
      <div className="follow-us">
         <div>Follow Us: </div>
         <div>
            <a href="https://www.facebook.com/VPSMediaGroup/">
            <Button text="" 
               color="fb-c"
               colorSolid="fb-c-s"
               fas="fb"
               shape="circle" 
               length="l-md" 
               size="sm"/> 
            </a>
         </div>
         <div>
            <a href="https://github.com/VattyTheHut/Viscosity">
            <Button text="" 
               color="fb-c"
               colorSolid="git-c-s"
               fas="git"
               shape="circle" 
               length="l-md" 
               size="sm"/> 
            </a>
         </div>
         <div>
            <a href="https://www.instagram.com/vpsmediagroup/">
            <Button text="" 
               color="fb-c"
               colorSolid="ig-c-s"
               fas="ig"
               shape="circle" 
               length="l-md" 
               size="sm"/> 
            </a>
         </div>
         <div>
            <a href="https://soundcloud.com/efontiane">
            <Button text="" 
               color="fb-c"
               colorSolid="sc-c-s"
               fas="sc"
               shape="circle" 
               length="l-md" 
               size="sm"/> 
            </a>
         </div>
      </div>
   </div>
</div>
    )
}
}

export default Footer;
