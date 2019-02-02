import axios from "axios";

//Add some ACTIONTYPE
const UPDATE_SOMETHING = "UPDATE_SOMETHING";

//Create InitialState
const initialState = {
  inputValue: ""
};

//add some ACTION CREATORS
export function updateSomething(input) {
  return {
    type: UPDATE_SOMETHING,
    payload: input
  };
}

//add some SWITCH CASES in the REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SOMETHING:
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
}

//axios request - - install promise middleware
// export function getItems() {
//   return {
//     type: GET_ITEMS,
//     payload: axios.get("http://localhost:3009/api/items")
//   };
// }
