import React, { Component } from 'react';
import axios from 'axios';
import utlil from "../../Utlil/Util.js"
import './Contact_a.css';

class Contact_a extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      phone: "",
      value: "",
      company: "",
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
      url: `${utlil.baseurl}/contact`,
      data: this.state,
    }).then(response => { 
      console.log(response)
      this.setState({email: "", phone: "", value: "", name: "", company: "", message: ""})
    }).catch(error => {
        console.log(error.response)
    });
}
  render() {
    return (
      <div className="Contact_a">
      <section>
         <div className="contact-background">Contact Us</div>
      </section>
      <section>
         <div className="wrapper">
            <div className="right">
               <div className="left-margin">
                  <div className="right-right">
                  <form>
                     <div className="form-group">
                        <p>FULL NAME<span>*</span></p>
                        <span className="icon-case"><i className="fa fa-user"></i></span>
                        <input onChange={this.handleInputChange} value={this.state.name} type="text" name="name" data-rule="required" />
                        <div className="validation"></div>
                     </div>
                     <div className="form-group">
                        <p>EMAIL ADDRESS<span>*</span></p>
                        <span className="icon-case"><i className="fa fa-envelope-o"></i></span>
                        <input onChange={this.handleInputChange} value={this.state.email} type="email" name="email" data-rule="required" />
                        <div className="validation"></div>
                     </div>
                     <div className="form-group">
                        <p>PHONE NUMBER<span>*</span></p>
                        <span className="icon-case"><i className="fa fa-phone"></i></span>
                        <input onChange={this.handleInputChange} value={this.state.phone} type="tel" name="phone"  data-rule="required" />
                        <div className="validation"></div>
                     </div>
                     <div className="form-group">
                        <p>COMPANY<span>*</span></p>
                        <span className="icon-case"><i className="fa fa-info"></i></span>
                        <input onChange={this.handleInputChange} value={this.state.company} type="text" name="company"  data-rule="required" />
                        <div className="validation"></div>
                     </div>
                     </form>
                  </div>
                  <div className="right-left">
                     <div className="form-group">
                        <p>HOW CAN WE HELP YOU? <span>*</span></p>
                        <textarea onChange={this.handleInputChange} value={this.state.message} name="message" cols="70" rows="10" data-rule="required" ></textarea>
                        <div className="validation"></div>
                     </div>
                     <div className="subject">
                        <label htmlFor="subject"></label>
                        <select onChange={this.handleInputChange} value={this.state.value} placeholder="Subject line" name="value" className="select_input" required>
                           <option defaultValue>Subject line</option>
                           <option value="d&d"> Website Design & Development</option>
                           <option value="SEO">I Search Engine Optimization</option>
                           <option value="PPC"> Pay Per Click Marketing</option>
                        </select>
                     </div>
                     <div><button onClick={this.onSubmit}>GET STARTED</button></div>
                  </div>
               </div>
            </div>
            <div className="left">
               <div className="content-wrapper">
                  <div className="contact-float">
                     <img alt="delaware img icon" src="https://cdn1.iconfinder.com/data/icons/us-states-maps-1/65/Delaware-256.png"/>
                     <div>
                        <h3>ADDRESS</h3>
                        <p>45 Eisenhower Drive, Suite 520<br /> Paramus, NJ 07652</p>
                     </div>
                  </div>
                  <div className="contact-float">
                     <img alt="phone img icon" src="https://www.hollyparkschool.co.uk/wp-content/uploads/2013/01/phone.png" />
                     <div>
                        <h3>PHONE</h3>
                        <p>201-448-9010</p>
                     </div>
                  </div>
                  <div className="contact-float">
                     <img alt="email img icon" src="https://cdn4.iconfinder.com/data/icons/dot/256/email_mail_post_letter_stamp.png" />
                     <div>
                        <h3>EMAIL</h3>
                        <p>contact@smartsites.com</p>
                     </div>
                  </div>
                  <div>FOLLOW SMARTSITES</div>
                  <div className="follow-content">
                     <div>
                        <div className="contact-float">
                           <img alt="delaware img icon" src="https://cdn1.iconfinder.com/data/icons/us-states-maps-1/65/Delaware-256.png"/>
                           <div>
                              <h3>LINK US</h3>
                              <p>to stay in touch!</p>
                           </div>
                        </div>
                        <div className="contact-float">
                           <img alt="phone img icon" src="https://www.hollyparkschool.co.uk/wp-content/uploads/2013/01/phone.png" />
                           <div>
                              <h3>FOLLOW US</h3>
                              <p>get the latest!</p>
                           </div>
                        </div>
                        <div className="contact-float">
                           <img alt="email img icon" src="https://cdn4.iconfinder.com/data/icons/dot/256/email_mail_post_letter_stamp.png" />
                           <div>
                              <h3>ADD US</h3>
                              <p>to your Circle!</p>
                           </div>
                        </div>
                     </div>

                     <div>
                        <div className="contact-float">
                           <img alt="delaware img icon"src="https://cdn1.iconfinder.com/data/icons/us-states-maps-1/65/Delaware-256.png"/>
                           <div>
                              <h3>PIN US</h3>
                              <p>recent photos!</p>
                           </div>
                        </div>
                        <div className="contact-float">
                           <img alt="phone img icon"src="https://www.hollyparkschool.co.uk/wp-content/uploads/2013/01/phone.png" />
                           <div>
                              <h3>SUBSCRIBE</h3>
                              <p>to our feed!</p>
                           </div>
                        </div>
                        <div className="contact-float">
                           <img alt="email img icon"src="https://cdn4.iconfinder.com/data/icons/dot/256/email_mail_post_letter_stamp.png" />
                           <div>
                              <h3>CONNECT US</h3>
                              <p>company & industry news!</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
    );
  }
}

export default Contact_a;
