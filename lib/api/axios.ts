import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const get = <T>(
  endpoint: string,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => {
  return axiosInstance.get<T>(`${BASE_URL}/${endpoint}`, config);
};

export const post = <T>(
  endpoint: string,
  data?: any,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => {
  return axiosInstance.post<T>(`${BASE_URL}/${endpoint}`, data, config);
};

export const put = <T>(
  endpoint: string,
  data?: any,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => {
  return axiosInstance.put<T>(`${BASE_URL}/${endpoint}`, data, config);
};

export const remove = <T>(
  endpoint: string,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => {
  return axiosInstance.delete<T>(`${BASE_URL}/${endpoint}`, config);
};

export const patch = <T>(
  endpoint: string,
  data?: any,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => {
  return axiosInstance.patch<T>(`${BASE_URL}/${endpoint}`, data, config);
};

export default axiosInstance;
