import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import {MyMarker} from "../Other/MyMarker"

const getGeo =()=>{
Geocode.setApiKey("AIzaSyD2ZZYBOdiEyvS0_N0bh5yEmijKWF2MGT0");
Geocode.setLanguage("en")
Geocode.fromAddress("13382 US-175, Kemp, TX 75143").then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
  
    },
    error => {
      console.error(error);
    }
  );}



class Map extends Component {

  

  constructor(props) {
    super(props);

    this.state = {

      //This is where the center of map is going to be
      center : {
        lat : 32.4426,
        lng : -96.2300,
      },

      //This is how much you want to zoom in
      zoom : 10,

    };
    

   
  }

 
 

  render() {

   
    getGeo();
    return (
      <div>
        <center>
        <div style={{ height: '50vh', width: '90%' }}>

          <GoogleMapReact
            bootstrapURLKeys={{ key:"AIzaSyD2ZZYBOdiEyvS0_N0bh5yEmijKWF2MGT0"  }}
  
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom} 
          >

          
          
            <MyMarker
              key={1}
              lat={this.props.passed_lat}
              lng={this.props.passed_lng}
              text={1}
              tooltip={"name"}
            />
          

          </GoogleMapReact>
        </div>
        </center>
      </div>
      
    );
  }
}
export default Map