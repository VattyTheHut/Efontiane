
import React, { Component } from 'react';
import{
      Route,
      BrowserRouter as Router,
} from "react-router-dom"
import Footer from './componets/Footer/Footer.js'
import Comingsoon from './componets/Comingsoon/Comingsoon.js'
import Navbar from './componets/Navbar/Navbar.js'
import Parallax from './componets/Parallax/Parallax'
import Videoplug from './componets/Videoplug/Videoplug.js'
import Contact from "./componets/Contact/Contact"
import SplitScreenSlider from "./componets/SplitScreenSlider/SplitScreenSlider.js"
import './App.css';
import Maps from "./componets/Maps/Maps.js"


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
                  <Parallax />
                  <Footer />
                </div>
              )} />
              <Route path="/contact" render={()=> (
                <div>
                  <Navbar navbar="v1"/>
                  <Contact />
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
                  <SplitScreenSlider />
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
