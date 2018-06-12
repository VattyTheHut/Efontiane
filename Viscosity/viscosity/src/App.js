
import React, { Component } from 'react';
import{
      Route,
      BrowserRouter as Router,
} from "react-router-dom"

import Footer from './componets/Footer/Footer.js'
import Comingsoon from './componets/Comingsoon/Comingsoon.js'
 import Navbar from './componets/Navbar/Navbar.js'
 import Parallax_a from './componets/Parallax/Parallax_a/Parallax_a.js'
 import Videoplug from './componets/Videoplug/Videoplug.js'
import Maps from "./componets/Maps/Maps.js"
// import Landingpage_v1 from './componets/Landingpage/Landingpage_v1/Landingpage_v1.js'
import Contact_a from "./componets/contact/contact_a/Contact_a.js"
import Splitscreenslider_v2 from "./componets/Splitscreenslider/Splitscreenslider_v2/Splitscreenslider_v2.js"
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
           <Router>
             <div>
              <Route exact path="/" render={()=> (
                <div>
                  <Navbar navbar="v1"/>
                  <Videoplug />
                  <Footer />
                </div>
              )} />
              <Route path="/about" render={()=> (
                <div>
                  <Navbar navbar="v1"/>
                  <Parallax_a />
                  <Footer />
                </div>
              )} />
              <Route path="/contact" render={()=> (
                <div>
                  <Navbar navbar="v1"/>
                  <Contact_a />
                  <Maps />
                  <Footer />
                </div>
              )} />

              <Route path="/blog" render={()=> (
                <div>
                  <Navbar navbar="v1"/>
                  <Comingsoon />
                  <Footer />
                </div>
              )} />

              <Route path="/career" render={()=> (
                <div>
                  <Navbar navbar="v1" />
                  <Splitscreenslider_v2 />
                  <Footer />
                </div>
              )} />

             </div>
           </Router>
      </div>
    );
  }
}

export default App;
