import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import {getSmurfs, removeSmurf} from '../actions/index';
import {connect} from 'react-redux'
import SmurfForm from './Form';
import Smurf from './Smurf';

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

const mapDispatchToProps ={
    getter: getSmurfs,
    deleter: removeSmurf
}

class App extends Component {
    componentDidMount() {
       this.props.getter();
    }
  render() {
    return (
      <div className="App">
      <h1> List of smurfs: </h1>
      <form>
      {this.props.smurfs.map(smurf => (
          <Smurf smurf={smurf}/>
                ))}
      </form>
        <SmurfForm />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
