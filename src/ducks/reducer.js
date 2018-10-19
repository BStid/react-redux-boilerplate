import axios from "axios";

//Add some ACTIONTYPE
const UPDATE_SOMETHING = "UPDATE_SOMETHING";

//Create InitialState
const initialState = {
  actionKey: ""
};

//add some SWITCH CASES in the REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SOMETHING:
      return { ...state, actionKey: action.payload };
  }
}

//add some ACTION CREATORS
export function somethingFun(actionKey) {
  return {
    type: UPDATE_SOMETHING,
    payload: actionKey
  };
}

//axios request - - install promise middleware
// export function getItems() {
//   return {
//     type: GET_ITEMS,
//     payload: axios.get("http://localhost:3009/api/items")
//   };
// }
