import React, { Component } from 'react'
import { AppBar, Container} from '@material-ui/core'
import Listings from '../containers/Listings'
import cookie from 'cookie'



class Home extends Component {

    state = {localIsLog:false}
    
    checkAuth = () => {
        const cookies = cookie.parse(document.cookie)
        return cookies["loggedIn"] ? true : false
    }

   
 
    render() {
            
        return (

            
            
            <div className="listing_table">
            {(this.checkAuth())?
            <AppBar position="relative" style={{backgroundColor:"lightgrey", color:"black", padding:"2px 0px 2px 10px"}}>   Logged in as {this.props.userInfo.username}</AppBar>
            :null}
                <Container>
                    
                    <Listings></Listings>
                    
                    

                    
                                
                </Container>
            </div>
        )
    }
}

export default Home