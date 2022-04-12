export const SET_DATA = "SET_DATA";
export const REMOVE_UNI = "REMOVE_UNI";
export const ADD_UNI = "ADD_UNI";

export const setUniDataSuccess = (data) => ({
  type: SET_DATA,
  payload: { data },
});

export const removeUniSucess = (name) => ({
  type: REMOVE_UNI,
  payload: name,
});

export const addUniSuccess = (uni) => ({
  type: ADD_UNI,
  payload: { uni },
});

export function setUniData(data) {
  return (dispatch) => dispatch(setUniDataSuccess(data));
}

export function removeUni(name) {
  return (dispatch) => dispatch(removeUniSucess(name));
}

export function addUni(uni) {
  return (dispatch) => dispatch(addUniSuccess(uni));
}
