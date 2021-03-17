import Api from "../../services/commons";
import { LOGIN, SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

export function setCurrentUser (user){
  return{
    type: SET_CURRENT_USER,
    user
  };
}

//export function authUser (type, userData){
//  return dispatch => {
//    return new Promise ((resolve, reject) => {
//      return apiCall("post", `/api/auth/${type}`, userData)
//      .then(//
//        ({token, ...user}) => {
//        localStorage.setItem("jwtToken", token);
//        dispatch(setCurrentUser(user));
//        dispatch(removeError());
//        resolve();  //indica que la Api call aprobo
////      })
//      .catch (error => {
//        dispatch(addError(error));
//        reject();   //indica que la Api call fallo
//      });
//    });
//  };
//}


export const login = (value) => {
  return async (dispatch) => {
    try {
      addError(dispatch);
      const values = await Api.login(value);
      const { data } = values;
      if (data.success) {
        dispatch({
          type: LOGIN,
          payload: data,
        });
      }
      removeError(dispatch);
      return data;
    } catch (e) {
      removeError(dispatch);
      return e && e.data
        ? e.data
        : "Ha ocurrido un error, por favor consulte con el administrador del sistema.";
    }
  };
};