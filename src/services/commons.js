import { apiAuth, apiCall } from "./api";
//////////////////////////////////
//AUTH
// post
const login = (data) => apiAuth("POST", "/authentications/login/", data);
const register = (data) =>
  apiCall("POST", "/component/AuthForm", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  export default {
    login,
  }