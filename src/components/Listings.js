import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'
import cookie from 'cookie'


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}



export default function Listings(props) {


const deleteItem=(index)=>{
    props.deleteListing(index)
  
}
//Added this if statement to force state change.  Had issue with opening page and cookie true, but state false.
if (!props.logStatus.isLoggedIn){
    if(checkAuth()){ props.updateLogStatus({isLoggedIn:true}) }
}


  return (
    <TableContainer   className="listing_table" >
      <Table className="listing_table"  aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">Address</TableCell>
            {checkAuth()?
            <TableCell align="right">Delete</TableCell>:null}
          </TableRow>
        </TableHead>
        <TableBody >
          {props.listings.map((row,index) => (
            <TableRow key={row.name+index}>
              <TableCell component="th" scope="row">
              <Link to={{pathname:"/details",
                        passedProps:{arrayIdx:index}}}
                        onClick={()=>{props.updateMap({mapIndex:index})}}
              
                    >{row.name}</Link>
              </TableCell>
             
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.operating_hours}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              {(checkAuth()&&props.logStatus.isLoggedIn)?
              <TableCell align="right">
                  <DeleteIcon onClick={()=>deleteItem(index)}></DeleteIcon></TableCell>:null}
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}