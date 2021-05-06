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

authHost.interceptors.request.use(authInterceptor);

export { host, authHost };
