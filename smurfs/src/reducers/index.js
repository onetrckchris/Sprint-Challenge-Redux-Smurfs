import { FETCHING, ADDING, ADDING_SUCCESS, SUCCESS, FAILURE } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      }
    case SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }
    case ADDING:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      }
    case ADDING_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        addingSmurf: false
      }
    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;