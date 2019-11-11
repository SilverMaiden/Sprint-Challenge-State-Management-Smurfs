import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL
} from '../actions/actions';



const initialState = {
    smurfs: [],
    error: '',
    isFetching: false
};

export const reducer = (state=initialState, action) => {
    console.log('reducer', action.type);
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SMURF_SUCCESS:
            return {
            smurfs: action.payload,
            isFetching: false,
            error: ''
        };

        case FETCH_SMURF_FAIL:
              return {
                ...state,
                error: action.payload
              };
        default:
            return state;
    }
}


