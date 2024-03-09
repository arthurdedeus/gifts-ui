import { default as axiosInstance } from 'axios';

export const createAxiosInstance = () =>
  axiosInstance.create({
    baseURL: process.env.API_BASE_URL,
  });

export const axios = createAxiosInstance();
