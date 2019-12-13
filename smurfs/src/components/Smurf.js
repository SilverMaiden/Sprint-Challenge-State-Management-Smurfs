import React from 'react';
import {removeSmurf} from '../actions/index';
import {connect} from 'react-redux';
import {Link, Redirect} from "react-router-dom";

const Smurf = props => {

    let handleClick = event => {
        props.removeSmurf(props.smurf.id)
    }
    console.log(props)
    return (
        <div>
                <Link to={`/smurfs/${props.smurf.id}`}><h3>Name: {props.smurf.name}</h3></Link>
                <h3>Age: {props.smurf.age}</h3>
                <h3>Height: {props.smurf.height}</h3>

                <Link to="/"><button onClick={handleClick}> Remove Smurf</button></Link>
        </div>
    )
}

export default connect(null, {removeSmurf})(Smurf);
