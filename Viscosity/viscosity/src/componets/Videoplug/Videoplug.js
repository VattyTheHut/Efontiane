import React, { Component } from 'react';
import axios from 'axios';
import Converg from "/Users/vatekehcorlon/ef/Viscosity/viscosity/src/componets/Converg/Converg.js"
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
      url: 'http://127.0.0.1:3001/consultation',
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
            <video src="https://production.cdmycdn.com/assets/marketing-pages/intensives/bws/coding-scenes-9a2031e8142b40bdb5d936d5eef33dfa.mp4" allowFullScreen muted type="video/mp4" autoPlay="true" loop="true"></video>
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
               <li><img src="https://digital.sellutions.co.nz/wp-content/uploads/2017/05/adwords-logo.png"/></li>
               <li><img src="https://cdn2.hubspot.net/hubfs/53/assets/hubspot.com/home/2018/Integrations_Illustration@2x.png?t=1528121464796"/></li>
               <li><img src="https://www.rocketclicks.com/wp-content/uploads/2017/11/Facebook-Certified-Buying-Professional.png"/></li>
            </ul>
         </div>
      </section>
      <section className="section section-b">
         <div className="left">
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
         <div className="right">
            <div>
               <ul>
                  <li><img src="https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-0/c0.68.200.200/p200x200/21032534_1793788547579342_4742193063259326372_n.jpg?_nc_cat=0&oh=63ff141051265acf7277071ca966c781&oe=5BB5AA0C"/></li>
                  <li><img src="https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-0/c0.53.200.200/p200x200/21105635_1793788544246009_3626331570470053566_n.jpg?_nc_cat=0&oh=7d68b5c07e5aced2bbc5652d6bb01a26&oe=5B7C1E84"/></li>
                  <li><img src="https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-0/c0.56.200.200/p200x200/21077443_1793788540912676_5241063547288790783_n.jpg?_nc_cat=0&oh=986e69f139818aebb67d144e6a819e57&oe=5B7D1D99"/></li>
               </ul>
            </div>
            <div>
               <ul>
                  <li><img src="https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-0/c0.31.200.200/p200x200/21032679_1793788490912681_8684408446809754230_n.jpg?_nc_cat=0&oh=90399e3b66dfb231b1f56e5b559af160&oe=5B76BBB0"/></li>
                  <li><img src="https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-0/c0.54.200.200/p200x200/21151350_1793788487579348_8166251123996246263_n.jpg?_nc_cat=0&oh=64bb48f12940f1b2abb1f81dbbbb2dcf&oe=5B861A96"/></li>
               </ul>
            </div>
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
