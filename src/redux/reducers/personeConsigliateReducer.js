import { SET_PERSONECONSIGLIATE_RESULTS } from "../actions";

const initialState = {
  value: [],
};
const personeConsigliateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONECONSIGLIATE_RESULTS:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default personeConsigliateReducer;
