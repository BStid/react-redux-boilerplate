import axios from "axios";

//Add some ACTIONTYPE
const UPDATE_SOMETHING = "UPDATE_SOMETHING";

//Create InitialState
const initialState = {
  stuff: []
};

//add some SWITCH CASES in the REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SOMETHING:
      return { ...state, actionType: action.payload };
  }
}

//add some ACTION CREATORS
export function somethingFun(actionType) {
  return {
    type: UPDATE_SOMETHING,
    payload: actionType
  };
}
