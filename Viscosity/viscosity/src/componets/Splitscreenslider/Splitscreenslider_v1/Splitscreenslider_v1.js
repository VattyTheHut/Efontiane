import React, { Component } from 'react';
import './Splitscreenslider_v1.css';

class Splitscreenslider_v1 extends Component {

    constructor(){
      
        super(prop)

        document.addEventListener('DOMContentLoaded', function(){
            let wrapper = document.getElementById('wrapper');
            let topLayer = wrapper.querySelector('.top');
            let handle = wrapper.querySelector('.handle');
            let skew = 0;
            let delta = 0;
          
            if(wrapper.className.indexOf('skewed') != -1){
              skew = 1000;
            }
            
            wrapper.addEventListener('mousemove', function(e){
              delta = (e.clientX - window.innerWidth / 2) * 0.5;
            
              handle.style.left = e.clientX + delta + 'px';
          
              topLayer.style.width= e.clientX + skew + delta + 'px';
            });
          });
    }




  render() {
    return (
        <div className="Splitscreenslider_v1">
            

        <h1>Look Sharp</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam temporibus dolore vero reiciendis atque debitis. Sequi at consequatur deserunt?</p>


      
        </div>
    );
  }
}

export default Splitscreenslider_v1;


