import { Product } from '../types';
import { PaginatedResponse } from '../types/api';
import { axios } from './axios';

export const getGifts = async () => {
  const response = await axios.get<PaginatedResponse<Product>>('/gifts/');
  return response.data;
};
