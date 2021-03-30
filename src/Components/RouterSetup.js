import React from 'react';
import Home from './Home';
import Login from './Login';
import Account from './Account';
import Images from './Images';
import {Redirect,BrowserRouter as Router,Route} from 'react-router-dom';
const RouterSetup=()=>{
    return(
        <Router>
            <Route path="/" exact>
                <Redirect to="/Home"></Redirect>
            </Route>
            <Route path="/Home">
                <Home/>
            </Route>
            <Route path="/Login">
                <Login/>
            </Route>
            <Route path="/Account">
                <Account/>
            </Route>
            <Route path="/Images">
                <Images/>
            </Route>
        </Router>
    )
    
}

export default RouterSetup;