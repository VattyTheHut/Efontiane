import React, { Component } from 'react';
import './Contact_a.css';

class Contact_a extends Component {

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
                     <div className="form-group">
                        <p>FULL NAME<span>*</span></p>
                        <span className="icon-case"><i className="fa fa-user"></i></span>
                        <input type="text" name="name" data-rule="required" />
                        <div className="validation"></div>
                     </div>
                     <div className="form-group">
                        <p>EMAIL ADDRESS<span>*</span></p>
                        <span className="icon-case"><i className="fa fa-envelope-o"></i></span>
                        <input type="email" name="email" data-rule="required" />
                        <div className="validation"></div>
                     </div>
                     <div className="form-group">
                        <p>PHONE NUMBER<span>*</span></p>
                        <span className="icon-case"><i className="fa fa-phone"></i></span>
                        <input type="tel" name="phone"  data-rule="required" />
                        <div className="validation"></div>
                     </div>
                     <div className="form-group">
                        <p>COMPANY<span>*</span></p>
                        <span className="icon-case"><i className="fa fa-info"></i></span>
                        <input type="text" name="company"  data-rule="required" />
                        <div className="validation"></div>
                     </div>
                  </div>
                  <div className="right-left">
                     <div className="form-group">
                        <p>HOW CAN WE HELP YOU? <span>*</span></p>
                        <textarea name="message" cols="70" rows="10" data-rule="required" ></textarea>
                        <div className="validation"></div>
                     </div>
                     <div className="subject">
                        <label htmlFor="subject"></label>
                        <select placeholder="Subject line" name="subject" className="select_input" required>
                           <option disabled hidden defaultValue>Subject line</option>
                           <option> Website Design & Development</option>
                           <option>I Search Engine Optimization</option>
                           <option> Pay Per Click Marketing</option>
                        </select>
                     </div>
                     <div><button>GET STARTED</button></div>
                  </div>
               </div>
            </div>
            <div className="left">
               <div className="content-wrapper">
                  <div className="contact-float">
                     <img src="https://cdn1.iconfinder.com/data/icons/us-states-maps-1/65/Delaware-256.png"/>
                     <div>
                        <h3>ADDRESS</h3>
                        <p>45 Eisenhower Drive, Suite 520<br /> Paramus, NJ 07652</p>
                     </div>
                  </div>
                  <div className="contact-float">
                     <img src="https://www.hollyparkschool.co.uk/wp-content/uploads/2013/01/phone.png" />
                     <div>
                        <h3>PHONE</h3>
                        <p>201-448-9010</p>
                     </div>
                  </div>
                  <div className="contact-float">
                     <img src="https://cdn4.iconfinder.com/data/icons/dot/256/email_mail_post_letter_stamp.png" />
                     <div>
                        <h3>EMAIL</h3>
                        <p>contact@smartsites.com</p>
                     </div>
                  </div>
                  <div>FOLLOW SMARTSITES</div>
                  <div className="follow-content">
                     <div>
                        <div className="contact-float">
                           <img src="https://cdn1.iconfinder.com/data/icons/us-states-maps-1/65/Delaware-256.png"/>
                           <div>
                              <h3>LINK US</h3>
                              <p>to stay in touch!</p>
                           </div>
                        </div>
                        <div className="contact-float">
                           <img src="https://www.hollyparkschool.co.uk/wp-content/uploads/2013/01/phone.png" />
                           <div>
                              <h3>FOLLOW US</h3>
                              <p>get the latest!</p>
                           </div>
                        </div>
                        <div className="contact-float">
                           <img src="https://cdn4.iconfinder.com/data/icons/dot/256/email_mail_post_letter_stamp.png" />
                           <div>
                              <h3>ADD US</h3>
                              <p>to your Circle!</p>
                           </div>
                        </div>
                     </div>
                     
                     <div>
                        <div className="contact-float">
                           <img src="https://cdn1.iconfinder.com/data/icons/us-states-maps-1/65/Delaware-256.png"/>
                           <div>
                              <h3>PIN US</h3>
                              <p>recent photos!</p>
                           </div>
                        </div>
                        <div className="contact-float">
                           <img src="https://www.hollyparkschool.co.uk/wp-content/uploads/2013/01/phone.png" />
                           <div>
                              <h3>SUBSCRIBE</h3>
                              <p>to our feed!</p>
                           </div>
                        </div>
                        <div className="contact-float">
                           <img src="https://cdn4.iconfinder.com/data/icons/dot/256/email_mail_post_letter_stamp.png" />
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
      <section>
         <div className="map">
         </div>
      </section>
   </div>
    );
  }
}

export default Contact_a;
