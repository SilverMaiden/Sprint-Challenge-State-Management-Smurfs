import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import {getSmurfs, removeSmurf} from '../actions/index';
import {connect} from 'react-redux'
import Smurf from './Smurf';
import SmurfForm from './Form';
import SingleSmurf from './SingleSmurf';
import Main from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const mapDispatchToProps ={
    getter: getSmurfs,
    deleter: removeSmurf
}


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
          <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route exact path={`/smurfs/:id`}>
                <SingleSmurf  />
            </Route>
          </Switch>
          </div>
        </Router>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
