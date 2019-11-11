import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_ERROR
} from '../actions/index';



const initialState = {
    smurfs: [],
    error: '',
    isFetching: false
};

export const reducer = (state=initialState, action) => {
    console.log('reducer', action.type);
    switch(action.type) {
        //Fetching Initial Data
        case FETCH_SMURF_START:
            console.log("yay ive started");
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SMURF_SUCCESS:
            console.log("yay, success!")
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
        // Adding New Smurfs
        case ADD_SMURF_START:
            console.log("yay I'm loadgin");
            return {
            ...state,
            isAdding: true,
            error: ''
        }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                isAdding: false
        }

        case ADD_SMURF_ERROR:
            return {
            ...state,
            error: action.payload

        }


        default:
            return state;
    }
}


