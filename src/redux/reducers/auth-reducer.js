import { UPDATE_AUTH_STATE } from '../actions';

export default (state = { authenticated: false }, action) => {
  switch(action.type) {
    case UPDATE_AUTH_STATE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}