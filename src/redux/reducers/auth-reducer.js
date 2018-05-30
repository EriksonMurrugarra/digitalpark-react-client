import { UPDATE_AUTH_STATE } from '../actions';

export default (state = null, action) => {

  const auth = localStorage.getItem("auth");
  if(auth) {
    state = JSON.parse(auth);
  }

  switch(action.type) {
    case UPDATE_AUTH_STATE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}