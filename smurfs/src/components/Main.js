import React from "react";
import Smurf from './Smurf';
import SmurfForm from './Form';

import {getSmurfs, removeSmurf} from '../actions/index';
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

const mapDispatchToProps ={
    getter: getSmurfs,
    deleter: removeSmurf
}


const Main = props => {

    return (
        <div>
          <h1> List of smurfs: </h1>
          {props.smurfs.map(smurf => (
              <Smurf smurf={smurf}/>
                    ))}

            <SmurfForm />
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
