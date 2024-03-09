import { CreateAxiosDefaults, default as instance } from 'axios';

export const createAxiosInstance = (extra?: CreateAxiosDefaults) =>
  instance.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    ...extra,
  });

export const axios = createAxiosInstance();
