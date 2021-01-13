import React from 'react'
import { Switch, Route, Redirect } from 'react-router'


import cookie from 'cookie'
import Login from "./containers/Login"
import Home from "./containers/Home"
import Add from "./containers/Add"
import Details from "./containers/Details"


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}


// Write ProtectedRoute function here

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} 
      
      render={(props) => checkAuth()
        ?<Component {...rest} {...props}/>
        :<Redirect to="" />
      } />
    )
  }

const Router = () => {
    return (
        <Switch>
            <Route  exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/details" component={Details} />
            <ProtectedRoute  path="/add" component={Add} />
             {/* <ProtectedRoute  path='/list' component={List}/>
            <ProtectedRoute e path='/showplans' component={ShowPlans}/>
            <ProtectedRoute  path='/createplan' component={CreatePlan}/>
            <ProtectedRoute  path="/newexercise" component={NewExercise} />
            <ProtectedRoute  path="/schedule" component={Schedule} />
            <ProtectedRoute  path="/performworkout" component={PerformWorkout} /> */}
            {/* <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
    );
};

export default Router;