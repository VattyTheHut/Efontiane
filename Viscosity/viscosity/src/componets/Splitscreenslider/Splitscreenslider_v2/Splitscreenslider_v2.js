import React, { Component } from 'react';
import './Splitscreenslider_v2.css';

class Splitscreenslider_v2 extends Component {




  render() {


    // const left = document.querySelector(".left");
    //     const right = document.querySelector(".right");
    //     const container = document.querySelector(".container");
        
    //     left.addEventListener("mouseenter", () => {
    //       container.classList.add("hover-left");
    //     });
        
    //     left.addEventListener("mouseleave", () => {
    //       container.classList.remove("hover-left");
    //     });
        
    //     right.addEventListener("mouseenter", () => {
    //       container.classList.add("hover-right");
    //     });
        
    //     right.addEventListener("mouseleave", () => {
    //       container.classList.remove("hover-right");
    //     });






    return (
        <div className="Splitscreenslider_v2">
            <div className="container">
                <div className="split left">
                    <h1 style={ {fontSize: "40px"} }>The Designer</h1>
                    <a href="#" className="button">Read More</a>
                </div>

            <div className="split right">
                <h1>The Programmer</h1>
                <a href="#" className="button">Read More</a>
            </div>
        </div>
    </div>
    );
  }
}

export default Splitscreenslider_v2;


