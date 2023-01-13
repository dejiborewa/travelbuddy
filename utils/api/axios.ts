/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-param-reassign */
import axios from "axios";

import { baseURL } from "../contants";

const baseAxiosMethod = axios.create({
  baseURL
});

// baseAxiosMethod.interceptors.request.use(
//   async (config) => {
//     const token = localStorage.getItem("token");
//     if (token && config.headers) {
//       baseAxiosMethod.defaults.headers.common[
//         "Authorization"
//       ] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default baseAxiosMethod;
