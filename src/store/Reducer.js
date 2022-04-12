import * as ActionTypes from "./Actions";

const intialState = {
  data: [],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DATA: {
      return {
        ...state,
        data: action.payload.data,
      };
    }
    case ActionTypes.REMOVE_UNI: {
      return {
        ...state,
        data: state.data.filter((_, i) => i !== state.data.length - 1),
      };
    }
    case ActionTypes.ADD_UNI: {
      return {
        ...state,
        data: state.data.concat(state.data[0]),
      };
    }
    default:
      return state;
  }
};
export default reducer;
