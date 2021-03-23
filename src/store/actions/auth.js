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

export function logout(){
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export const login = (value) => {
  console.log('value', value);
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
    } catch (errors) {
      console.log('error e: ', errors.data);
      addError(errors.data.detail);
      throw Error(errors.data.detail);
      // addError(e.details);
      // removeError(dispatch);
      // return e && e.data
      //   ? e.data
      //   : "Ha ocurrido un error, por favor consulte con el administrador del sistema.";
    }
  };
};