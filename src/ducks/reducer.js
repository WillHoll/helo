const initialState = {
  username: '',
  profile_pic: ''
};

//ACTION CONSTANTS
const UPDATE_USER = "UPDATE_USER";
const CLEAR_USER = "CLEAR_USER";

//ACTION BUILDERS
export function updateUser(username, profile_pic) {
  return {
    type: UPDATE_USER,
    payload: {username, profile_pic}
  };
};

export function clearUser() {
  return {
    type: CLEAR_USER,
    payload: null
  };
};

export default function reducer(state = initialState, action) {
  // console.log('hit ->', action)
  switch(action.type) {
    case UPDATE_USER:
      return {...state, ...action.payload};
    case CLEAR_USER:
      return {...initialState};
    default: return state;
  };
};