import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL} from '../actions/actions.js';

const initialState = {
  smurfs: []
}; //this closes initialState

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }; //this closes START case
    case FETCH_SMURFS_SUCCESS:
          console.log('reducer success', action);
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ''
      }; //this closes SUCCESS case
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload
      }; //this closes FAIL case
    default:
      return state;
  } //this closes switch
} //this closes reducer function

export default reducer; 