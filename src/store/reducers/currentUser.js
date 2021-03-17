import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false, //Espero que sea true, cuando inicia sesion
  user: {} //Toda la informacion del usuario cuando esta dentro
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case SET_CURRENT_USER:
      return {
        // Convierte un objeto en false, o si es una llave, en true
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user
      };
      default:
      return state;
  }
};