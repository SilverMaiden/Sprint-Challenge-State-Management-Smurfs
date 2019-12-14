import React, {useEffect} from "react";
import Smurf from './Smurf';
import {getSmurfs} from '../actions/index';
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

const mapDispatchToProps ={
    getter: getSmurfs,
}

const SingleSmurf = props => {
    useEffect(() => {
        props.getter();
    }, [])

    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);
    let singleSmurf = props.smurfs.filter(each => {
        return each.id.toString() === id.toString();
    })


    return (
        <div>
        {singleSmurf[0] ? <Smurf smurf={singleSmurf[0]}/> : "Loading..."}
                    </div>

    )
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleSmurf);
