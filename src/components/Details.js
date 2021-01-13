

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import {MyMarker2} from "../Other/MyMarker"



class Details extends Component {

  
  constructor() {
    super();

    this.state = {
       
        center : {
            lat : 32,
            lng : -96.2300,
          },
   
      zoom : 15,     
    };   
  }
  render() {   
    let center = {
        lat : parseFloat(this.props.listings[this.props.map.mapIndex].lat),
        lng : parseFloat(this.props.listings[this.props.map.mapIndex].lng)
      }
     
    return (
      <div><center>
        <div className="align_left" style={{  width: '60%' }}>
        <div className="heading">
        {this.props.listings[this.props.map.mapIndex].name}</div >
        
        <div className="bold">{this.props.listings[this.props.map.mapIndex].address}</div>
        <div className="bold">{this.props.listings[this.props.map.mapIndex].operating_hours}</div>
        {this.props.listings[this.props.map.mapIndex].description}<br>
        </br>
            
        </div></center>
        <center>
        <div style={{ height: '50vh', width: '60%' }}>

          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY  }}
  
            defaultCenter={center}
            defaultZoom={this.state.zoom} 
          >
        
            <MyMarker2
              key={1}
              lat={parseFloat(this.props.listings[this.props.map.mapIndex].lat)}
              lng={parseFloat(this.props.listings[this.props.map.mapIndex].lng)}
              text={this.props.listings[this.props.map.mapIndex].name}
              tooltip={this.props.listings[this.props.map.mapIndex].name}
            />
          

          </GoogleMapReact>
        </div>
        </center>
      </div>
      
    );
  }
}
export default Details