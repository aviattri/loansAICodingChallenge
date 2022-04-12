export const SET_DATA = "SET_DATA";
export const REMOVE_UNI = "REMOVE_UNI";

export const setUniDataSuccess = (data) => ({
  type: SET_DATA,
  payload: { data },
});

export const removeUniSucess = (id) => ({
  type: REMOVE_UNI,
  payload: id,
});

export function setUniData(data) {
  return (dispatch) => dispatch(setUniDataSuccess(data));
}

export function removeUni(id) {
  return (dispatch) => dispatch(removeUniSucess(id));
}
