import React, {useState} from 'react';

const Smurf = props => {

    const [checked, setChecked] = useState(false);

    const handleChange = event => {
        setChecked(!checked);
    }
    return (
        <>
            <input type="checkbox" onClick={handleChange} />
            <p>{props.smurf.name}</p>
        </>

    )
}

export default Smurf;
