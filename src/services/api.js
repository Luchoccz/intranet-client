import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;
export function apiAuth(method, path, data, formData = false) {
  return new Promise((resolve, reject) => {
    axios.defaults.baseURL = serverUrl;
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
    axios.defaults.baseURL = "http://localhost:3001/";
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
