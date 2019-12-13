import axios from 'axios';


export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR';

export const SMURF_BY_ID_START = 'SMURF_BY_ID_START';
export const SMURF_BY_ID_SUCCESS = 'SMURF_BY_ID_SUCCESS';
export const SMURF_BY_ID_FAIL = 'SMURF_BY_ID_FAIl';

//later
export const EDIT_SMURF_START = 'EDIT_SMURF_START';
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS';
export const EDIT_SMURF_FAIL = 'EDIT_SMURF_FAIL';

export const REMOVE_SMURF_START = 'REMOVE_SMURF_START';
export const REMOVE_SMURF_SUCCESS = 'REMOVE_SMURF_SUCCESS';
export const REMOVE_SMURF_FAIL = 'REMOVE_SMURF_FAIL';

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURF_START});
            console.log("SUCCESS!");
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch({type: FETCH_SMURF_SUCCESS, payload: response.data})
        })
        .catch(err => dispatch({type: FETCH_SMURF_FAIL, payload: err}))
}

// Edit smurf by id

export const editSmurfById = (smurfUpdate) => dispatch => {
    dispatch({type: EDIT_SMURF_START});
    axios
        .put(`http://localhost:3333/smurfs/:${smurfUpdate.id}`, {
            name: smurfUpdate.name,
            age: smurfUpdate.age,
            height: smurfUpdate.height

        }).then(response => {
            dispatch({type: EDIT_SMURF_SUCCESS, payload: response})
        }).catch(err => {
            dispatch({type: EDIT_SMURF_FAIL, payload: err})
        })
}

export const addSmurf = (name, age, height) => dispatch => {
    dispatch({type: ADD_SMURF_START});
    axios
        .post('http://localhost:3333/smurfs', {
         name,
         age,
         height,
         id: 0
        }).then(response => {
            dispatch({type: ADD_SMURF_SUCCESS, payload: response})
        }).catch(err => {
            dispatch({type: ADD_SMURF_ERROR, payload:err })
        })
}

export const removeSmurf = (itemId) => dispatch => {
    dispatch({type: REMOVE_SMURF_START});
    axios
        .delete(`http://localhost:3333/smurfs/${itemId}`)
        .then(response => {
            console.log(response);
            dispatch({type: REMOVE_SMURF_SUCCESS, payload: response})
        }).catch(err => {
            dispatch({type: REMOVE_SMURF_FAIL, payload: err})
        })
}


