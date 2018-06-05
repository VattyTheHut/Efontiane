import React, { Component } from 'react';
import Button  from "/Users/vatekehcorlon/viscosity_va0.1/viscosity/client/src/componets/Button/Button.js"
import './Modal.css';

class Modal extends Component {

  render() {

    const mBlue = {backgroundColor: 'aqua' }
    const getModal = v => {
    const modal = {
      v1: <div className="Modal-party">
      <div className="party">
        <div className="blur-here"></div>
          <div className="party__box">
          <div className="close--btn">
          <Button text="" 
                  color="fb-c"
                  fas="fb"
                  shape="round" 
                  length="l-md" 
                  size="md"/> 
              </div>
              <div className="party__box-header">
                <div className="party__text">{this.props.partyText || "EXCLUSIVE"}</div>
              </div>
              <div className="party__box-info">
                <h2 className="heading-secondary">
                  <span className="party__offer">Get {this.props.partyOffer} off</span>
                  <span className="party__location">at Caribbean Bar between</span>
                  <span className="party__time">{this.props.partyTimeStart} and {this.props.partyTimeEnd}</span>
                </h2>
                <a href="#" className="info--btn">Take me there</a>
              </div>
          </div>
        </div>
      </div>,

      v2: <div className="BBBody">
              <div className="login-page">
                  <div className="login-form">
                      <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/29791610_573322166387374_7564735723551658441_n.jpg?_nc_cat=0&oh=ae39427b45a52f92c6e954317cdb455f&oe=5B6CC11A" className="small-img" alt="logo img" />
                      <form class="login-register-form">
                          <input type="text" placeholder="name" />
                          <input type="password" placeholder="password" />
                          <input type="text" placeholder="email address" />
                          <button>create</button>
          
                          <p className="viewer-message">
                              Already registered? 
                              <a id="sign-in">Sign In</a>
                          </p>
                      </form>
          
                  <form className="login-login-form">
                      <input type="text" placeholder="username" />
                      <input type="password" placeholder="password" />
                      <button id="haha">login</button>
                      <button style={mBlue} id="haha">ReseachGate</button>
                      <p className="login-message">Not registered? <a href='/signup'>Create an account</a></p>
                  </form>
                  </div>
              </div>
        </div>,
      
      v3: <div className="v3">
          <a href="#openModal">Open Modal</a>
            <div id="openModal" className="modalDialog">
              <div>
              <a href="#close" className="close" title="Close">
                <Button
                    text="X"
                    color="white"
                    colorSolid="pp-c-s"
                    colorBorder="pp-c"
                    fas="time"
                    fontSize="5vh"
                    faSize="fa-5x"
                    shape="square" 
                    len="l-md" 
                    size="md" />
                </a>


              <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/wrxxfrzJY6k" 
                  frameBorder="0" allow="autoplay; encrypted-media" 
                  allowFullScreen>
              </iframe>
              </div>
            </div>
          </div>
  

    }


    return modal[v]

  }


    return (
      <div className="modal">
        {getModal(this.props.modalType)}
      </div>
    );
  }
}

export default Modal;


