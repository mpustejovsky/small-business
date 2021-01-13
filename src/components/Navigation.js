
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import cookie from 'cookie'
import React from 'react';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const Navigation = (props) => {
    const [logCheck,setLogCheck]=React.useState(1)
    
     
    return (
        
        <AppBar position="relative" style={{backgroundColor:"green"}}>
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Kemp Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    {(checkAuth()&&logCheck)?
                    <li className="nav-list-item">
                        <Link to="/add">Add</Link>
                    </li>:null}
                    {(!checkAuth()||(!logCheck))?
                    <li className="nav-list-item">
                        <Link to="/login" onClick={()=>{setLogCheck(1)
                                                    props.updateLogStatus({isLoggedIn:true})
                                                    }}>Login</Link>
                    </li>:null}
                    {(checkAuth())?
                    <li className="nav-list-item"
                         onClick={() => {
                        setLogCheck(0)
                        props.updateLogStatus({isLoggedIn:false})                      
                        document.cookie = "loggedIn="                      
            
                    }}><Link to='/'>
                        Logout</Link>
                    </li>:null} 
                </ul>
            </Toolbar>
        
        </AppBar>
    )
}

export default Navigation