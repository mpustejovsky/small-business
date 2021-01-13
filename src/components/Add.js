import React, { Component} from 'react'
import { Button, AppBar, Container, TextField} from '@material-ui/core'
import cookie from 'cookie'
import Map from "./Map"
import Geocode from "react-geocode";





class Add extends Component {

    state = {name:"No Name Entered",
             address:"No Address Entered",
             operating_hours:"No Hours Entered",
             description:"No Discription Entered",   
             lng:"-96.313540",
             lat:"32.575170"

              }

        getGeo =(address)=>{
        Geocode.setApiKey(process.env.REACT_APP_API_KEY);
        Geocode.setLanguage("en")
        Geocode.fromAddress(address).then(
                    response => {
                     
                       const {lat,lng} = response.results[0].geometry.location;
                       this.setState({lng:lng,
                                      lat:lat})
                    },
                    error => {
                      console.error(error);
                    }
                  );
                 }
    
    checkAuth = () => {
        const cookies = cookie.parse(document.cookie)
        return cookies["loggedIn"] ? true : false
    }
 
    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        if(e.target.id==="address"){
        this.getGeo(e.target.value)
      
        }
        
        this.setState(newState)
    }

    handleSubmit =(e)=>{
       e.preventDefault()
       const payload= {...this.state}
       this.props.updateList(payload)
       this.props.history.push('/')


    }


    render() {
      
        return (
            <div>
            {(this.checkAuth())?
                <AppBar position="relative" style={{backgroundColor:"lightgrey", color:"black", padding:"2px 0px 2px 10px"}}>   Logged in as {this.props.userInfo.username}</AppBar>
                :null}
            
            <div className="add_container">

            
            <div className="add_left">

                <Container maxWidth="sm">
                    <h1 style={{ textAlign: 'center' }}>Input New Location </h1>
                    <form  noValidate autoComplete="off">
                    <div className="form">
                        <TextField id="name" className="form" onChange={this.handleTextChange} fullWidth={true}  defaultValue="Name" />
                        <TextField id="address" className="form" onChange={this.handleTextChange} fullWidth={true} defaultValue="Address" />
                        <TextField id="operating_hours" className="form" onChange={this.handleTextChange} fullWidth={true} defaultValue="Hours (ex. 8AM-9PM)" />
                        <TextField id="description" className="form" onChange={this.handleTextChange} fullWidth={true} defaultValue="Description" />
                        <br></br>
                        <Button  classes={{label:"button"}} onClick={this.handleSubmit}>    Save    </Button>
                       
                        


                    </div>             
                    </form>                                  
                </Container>  
  
             

    
    </div><div className="add_right">
                <Container maxWidth="sm">
                   <Map passed_lat={this.state.lat} passed_lng={this.state.lng}></Map>                          
                </Container></div>
            </div></div>
        )
    }
}

export default Add