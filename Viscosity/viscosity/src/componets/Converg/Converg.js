import React, { Component } from 'react';
import axios from "axios";

import utlil from "../Utlil/Util.js"
import './ Converg.css';


class Converg extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      phone: "",
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
    console.log(this.state);
    axios({
      method: 'post',
      url: `${utlil.baseurl}/converg`,
      data: this.state,
    })
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    // this.setState({email: "", phone: "", name: ""})
}
  render() {

    return (
      <div className="Converg">
        <h1>Everything <span>You</span> Need to <span>Succeed</span> Online</h1>
        <div>
            <div><input onChange={this.handleInputChange} value={this.state.name} type="text" placeholder="Full Name" name="name" id="name_input" required /></div>
            <div><input onChange={this.handleInputChange} value={this.state.email} type="text" placeholder="Email Address" name="email" id="email_input" required /></div>
            <div><input onChange={this.handleInputChange} value={this.state.phone} type="text" placeholder="Phone Number" name="phone" id="phone_input" required /></div>
            <div><input onClick={this.onSubmit} type="submit" value="Get Started" id="form_button" /></div>
        </div>
      </div>
    );
  }
}

export default Converg;
