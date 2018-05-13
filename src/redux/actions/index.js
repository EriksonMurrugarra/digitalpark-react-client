
export const UPDATE_AUTH_STATE = 'UPDATE_AUTH_STATE';

export function updateAuthState(authState) {
  return {
    type: UPDATE_AUTH_STATE,
    payload: authState
  }
}