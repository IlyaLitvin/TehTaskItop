import axios from "axios";

const url = "http://localhost:8080/api/user";

const host = axios.create({
  baseURL: url,
});

const authHost = axios.create({
  baseURL: url,
});

const authInterceptor = (config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

// authHost.interceptors.request.use(authInterceptor);

// authHost.interceptors.response.use(
//   (res) => {
//     const { auth } = store.getState();
//     const now = Date.now();
//     const { exp } = jwt_decode(auth.token);

//     if (!auth.refresh_token && now - 60 * 1000 < exp) {
//       console.log("hi");
//       const response = axios
//         .post(
//           `${process.env.REACT_APP_API_BASE_URL}/numarqe-gateway/auth/refresh`,
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${auth.token}`,
//             },
//             withCredentials: true,
//           }
//         )
//         .then((response) => {
//           store.dispatch(setToken(response.data.data.access_token));
//           store.dispatch(setRefreshToken(true));
//         })
//         .catch((err) => {
//           throw new Error(err);
//         });
//       return res;
//     }
//     return res;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

export { host, authHost };
