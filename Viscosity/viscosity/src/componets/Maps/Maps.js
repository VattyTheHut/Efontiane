
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "dotenv/config";
import Button from "../Button/Button.js"
import dotenv from 'dotenv'
dotenv.config()
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
require('dotenv').config()

console.log(process.env.GOOGLE_MAPS_API)


class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 39.683723,
      lng: -75.749657
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', 
                    width: '100%',
                    clear: 'both',
                    position: 'relative',
                    display: 'block',
                    zIndex: '1'
                    
                    
                    }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={39.683723}
            lng={-75.749657}
            text={'Newwark Delaware'}
          /> */}

          <Button text="" 
               color="fb-c"
               colorSolid="sc-c-s"
               fas="sc"
               shape="circle" 
               length="l-md" 
               size="sm"
               lat={39.683723}
              lng={-75.749657}
            /> 


        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;