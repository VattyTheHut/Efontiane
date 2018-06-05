import React from "react"
import ReactDOM from "react-dom"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import "./Maps.css"


class Maps extends React.Component{


    constructor(){
        super()
        this.state = {
            styles: {
                full: { height: `3vh`, width: `100%` },
                third: { height: `400px`, width: `300px` }
            }

        }

        // setStyle(style){
        //     this.setState({mapStyle: this.state.styles[full]});
        // }
    }

    render(){
         const apiKey = "AIzaSyBKMMq0Jg4wt58KlakG8aE_TcGIuIjGVCc        "
         const apiREST = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
         let markers =  this.props.markers || []     
        return (
            <div className="Maps">
                <GoogleMap
                    defaultZoom={this.props.zoom || 4}
                    defaultCenter={this.props.center}
                >
                {markers.map((markers, index => (
                    <Marker {...markers}/>
                )

                ))}
                </GoogleMap>
            </div>
        );
    }
}


export default withGoogleMap(Maps); 


// this is an example of how you would call a <Maps> componet from the Maps class
{ /* <Maps zoom={8} 
center={{ lat: 40.7128, lng: -74.0060 }} // add js object with keys latitude and logitude to center the map for example ==> { lat: 40.7128, lng: -74.0060 } Newyork
containerElement = {<div style={this.state.style.full} />}
mapElement= {<div style={{ height: `100%` }} />}/> */}
// the example below will render a google map that ___


