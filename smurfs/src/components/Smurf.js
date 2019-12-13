import React, {useState} from 'react';

const Smurf = props => {
    console.log(props.smurf);

    return (
        <p>
            <h3>{props.smurf.name} {props.smurf.age} {props.smurf.height}</h3>

            </p>
    )
}

export default Smurf;
