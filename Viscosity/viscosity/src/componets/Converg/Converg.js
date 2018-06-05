import React, { Component } from 'react';
import '/Users/vatekehcorlon/ef/Viscosity/viscosity/src/componets/Converg/ Converg.css';


class Converg extends Component {
  render() {
    return (
      <div className="Converg">
        <h1>Everything <span>You</span> Need to <span>Succeed</span> Online</h1>
        <div>
            <div><input type="text" placeholder="Full Name" name="name" id="name_input" required /></div>
            <div><input type="text" placeholder="Email Address" name="email" id="email_input" required /></div>
            <div><input type="text" placeholder="Phone Number" name="phone" id="phone_input" required /></div>
            <div><input type="submit" value="Get Started" id="form_button" /></div>
        </div>
      </div>
    );
  }
}

export default Converg;
