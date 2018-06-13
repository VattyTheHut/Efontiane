import React, { Component } from 'react';
import axios from 'axios';
import utlil from "../Utlil/Util.js"
import Converg from "../Converg/Converg.js"
import './Videoplug.css';

class Videoplug extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log("HIC on")
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
    console.log('touch');
  }
  onSubmit() {
    console.log(this.state)
    axios({
      method: 'post',
      url: `${utlil.baseurl}/consultation`,
      data: this.state,
       
    })
    .then(response => { 
      console.log(response)
      this.setState({email: "", subject: "", name: "", message: ""})
    })
    .catch(error => {
        console.log(error.response)
    });
}
  render() {
    return (
      <div className="Videoplug">
   <div className="videoplug">
      <header className="v-header container">
         <div className="fullscreen-video-wrap">
            <video src={require("../../Imgs/home.mp4")} allowFullScreen muted type="video/mp4" autoPlay="true" loop="true"></video>
         </div>
         <div className="header-overlay"></div>
         <div className="header-content">
            <div className="lays">
               <h1>.Efontaine</h1>
               <p>WEB FACTORY</p>
            </div>
         </div>
         <Converg />
      </header>
      <section className="section section-a">
         <h2>Certifications & Credentials</h2>
         <p>Customers have voted and the results 
            are in - 5-star ratings across the board!
         </p>
         <div className="certs">
            <ul>
               <li><img alt="Google adwords logo" src={require("../../Imgs/adwords-logo.png")}/></li>
               <li><img alt="Hubspot logo" src={require("../../Imgs/hubspot-logo.webp")}/></li>
               <li><img alt="Facebook blueprint logo" src={require("../../Imgs/FBC.png")}/></li>
            </ul>
         </div>
      </section>
      <section className="section section-b">
         <div className="b-left">
            <div>
               <h2>
                  The Team You Need <br />To Succeed.
               </h2>
            </div>
            <div>
               <p> 
                  Driven by passion and a commitment to our<br />
                  clients, our team combines talent and teamwork in our pursuit of web<br />
                  excellence.
               </p>
            </div>
         </div>
         <div className="b-right">
           
           
              <div><img alt="will" src={require("../../Imgs/member1.jpg")}/>
              <img alt="perry" src={require("../../Imgs/member2.jpg")}/>
              <img alt="jose" src={require("../../Imgs/member3.jpg")}/>
              <img alt="john" src={require("../../Imgs/member7.jpg")}/></div>
              <div><img alt="will" src={require("../../Imgs/member1.jpg")}/>
              <img alt="perry" src={require("../../Imgs/member2.jpg")}/>
              <img alt="jose" src={require("../../Imgs/member3.jpg")}/>
              <img alt="john" src={require("../../Imgs/member7.jpg")}/></div>
              
           
           
         </div>
      </section>
      <section className="section section-c">
         <div  className="container">
            <div className="wrapper">
               <h1>GET A FREE CONSULTATION</h1>
               <h2><i className="fas fa fa-phone"></i>302-669-5069</h2>
               <form action="/consultation" method="POST" className="cf">
                  <div className="half left cf">
                     <input onChange={this.handleInputChange} value={this.state.name} name="name" type="text" id="input-name" placeholder="Name*" required/>
                     <input onChange={this.handleInputChange} value={this.state.email} type="email" id="input-email" name="email" placeholder="Email address*" required/>
                     <input onChange={this.handleInputChange} value={this.state.subject} type="text" id="input-subject" name="subject" placeholder="Subject*" required/>
                  </div>
                  <div className="half right cf">
                     <textarea onChange={this.handleInputChange} value={this.state.message} name="message" type="text" id="input-message" placeholder="Message*" required></textarea>
                  </div>
                  <input onClick={this.onSubmit} type="submit" placeholder="Submit" id="input-submit" />
               </form>
            </div>
         </div>
      </section>
   </div>
</div>
    );
  }
}

export default Videoplug;
