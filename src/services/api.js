import axios from "axios";

const serverUrl = "http://localhost:8000/";
export function apiAuth(method, path, data, formData = false) {
  return new Promise((resolve, reject) => {
    axios.defaults.baseURL = serverUrl;
    console.log("serverUrl:::", serverUrl);
    if (formData) {
      axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
    }
    return axios[method.toLowerCase()](path, data)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err.response);
      });
  });
}
export function apiCall(method, path, data, headers = {}) {
  return new Promise((resolve, reject) => {
    axios.defaults.baseURL = "http://localhost:8000/";
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    return axios[method.toLowerCase()](path, data, headers)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err.response);
      });
  });
}

export function setTokenHeader(token){
  if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}