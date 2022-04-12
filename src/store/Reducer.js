import * as ActionTypes from "./Actions";

const intialState = {
  data: [],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return {
        ...state,
        data: action.payload.data,
      };
    case ActionTypes.REMOVE_UNI: {
      const id = action.payload;
      return {
        ...state,
        list: state.list.filter((item) => item.id !== id),
      };
    }
    default:
      return state;
  }
};
export default reducer;
