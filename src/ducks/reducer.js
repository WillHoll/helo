const initialState = {
  id: '',
  username: '',
  profile_pic: ''
}

//ACTION CONSTANTS
const UPDATE_USER = "UPDATE_USER";

//ACTION BUILDERS
export function updateUser(id, username, profile_pic) {
  return {
    type: UPDATE_USER,
    payload: {id, username, profile_pic}
  }
};

export default function reducer(state = initialState, action) {
  console.log('hit ->', action)
  switch(action.type) {
    case UPDATE_USER:
      return {...state, ...action.payload}
    default: return state
  }
}