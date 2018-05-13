import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';

// auth: () => { return {
//   authenticated: false,
//   userProfile: null,
//   accessToken: null
// }}
const rootReducer = combineReducers({
  auth: AuthReducer
});

export default rootReducer;