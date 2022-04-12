export const SET_DATA = "SET_DATA";
export const REMOVE_UNI = "REMOVE_UNI";
export const ADD_UNI = "ADD_UNI";

export const setUniDataSuccess = (data) => ({
  type: SET_DATA,
  payload: { data },
});

export const removeUniSucess = () => ({
  type: REMOVE_UNI,
});

export const addUniSuccess = () => ({
  type: ADD_UNI,
});

export function setUniData(data) {
  return (dispatch) => dispatch(setUniDataSuccess(data));
}

export function removeUni() {
  return (dispatch) => dispatch(removeUniSucess());
}

export function addUni() {
  return (dispatch) => dispatch(addUniSuccess());
}
