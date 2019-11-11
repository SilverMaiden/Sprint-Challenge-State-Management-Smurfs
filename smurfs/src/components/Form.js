import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import {addSmurf} from '../actions/index';
import {connect} from 'react-redux'

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })
    const handleNameChange = event => {
        setSmurf({...smurf, name: event.target.value});
        console.log(smurf);
    }
    const handleAgeChange = event => {
            setSmurf({...smurf, age: event.target.value});
            console.log(smurf);
        }
    const handleHeightChange = event => {
            setSmurf({...smurf, height: event.target.value});
            console.log(smurf);
        }


        return (
            <>
                <Form >
                    <Input className="bar" name="name" id="name" placeholder="name" onChange={handleNameChange} />
                    <Input className="bar" name="age" id="age" placeholder="age" onChange={handleAgeChange}  />
                    <Input className="bar" name="height" id="height" placeholder="height" onChange={handleHeightChange}  />
                    <Button onClick={props.addSmurf(smurf.name, smurf.age, smurf.height)}> Add Smurf </Button>
                    <Button> Remove Smurf </Button>
                </Form>
            </>
        )
}

export default connect(null, {addSmurf})(SmurfForm);
