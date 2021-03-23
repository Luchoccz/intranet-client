import Api from "../../services/commons";
import { LOGIN, SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";
import { setTokenHeader } from '../../services/api';

export function setCurrentUser (user){
  return{
    type: SET_CURRENT_USER,
    user
  };
}

export function setAuthorizationToken(token){
  setTokenHeader(token);
}

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