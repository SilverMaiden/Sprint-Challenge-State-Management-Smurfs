import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import {getSmurfs} from '../actions/actions';
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
})

class App extends Component {
    componentDidMount() {
       this.props.getSmurfs();
    }
  render() {
    return (
      <div className="App">
      {console.log(this.props)}
      {this.props.smurfs.map(smurf => (
        <h1> {smurf.name}</h1>
      ))}
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
