
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import utlil from "../Utlil/Util.js"
import Button from "../Button/Button.js"
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
require('dotenv').config()


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
          bootstrapURLKeys={{ key: utlil.googleapi}}
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