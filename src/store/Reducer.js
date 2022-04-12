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
      console.log(state);
      const name = action.payload;
      return {
        ...state,
        data: state.data.filter((item) => item.name !== name),
      };
    }
    case ActionTypes.ADD_UNI: {
      return {
        ...state,
        data: state.data.concat(action.payload.uni),
      };
    }
    default:
      return state;
  }
};
export default reducer;
