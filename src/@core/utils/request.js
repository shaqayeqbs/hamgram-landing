import axios from "axios";
import APP_CONFIG from "../constants/app-config";
import logout from "../../components/Hepler/logout";
import { serverError } from "../constants/toasts-messages";

export function getLocalAccessToken() {
  const accessToken = localStorage.getItem("token");
  return accessToken;
}

const instance = axios.create({
  baseURL: APP_CONFIG.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    try {
      if (err.response.status === 503) {
        serverError();
      }
      if (err.response.status === 401) {
        console.log("checked user Auth", err.response.status);
        logout();
      }
      return;
    } catch (_error) {
      // return Promise.reject(_error);
    }

    // if (err.response.status === 403 && err.response.data) {
    //   return Promise.reject(err.response.data);
    // }
    // return Promise.reject(err);
  }
);

export default instance;
