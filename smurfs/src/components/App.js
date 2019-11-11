import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import {getSmurfs} from '../actions/index';
import {connect} from 'react-redux'
import SmurfForm from './Form';
import Smurf from './Smurf';

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
      <h1> List of smurfs: </h1>
      {console.log(this.props.smurfs)}
      <form>
      {this.props.smurfs.map(smurf => (
          <Smurf smurf={smurf} />
      ))}
      </form>
        <SmurfForm />
      </div>
    );
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
