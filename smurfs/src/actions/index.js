import axios from 'axios';

export const FETCHING = 'FETCHING';
export const ADDING = 'ADDING';
export const SUCCESS = 'SUCCESS';
export const ADDING_SUCCESS = 'ADDING_SUCCESS'
export const FAILURE = 'FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: FAILURE, payload: error })
    })
}

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADDING });
  axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      dispatch({ type: ADDING_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FAILURE, payload: error });
    })
}