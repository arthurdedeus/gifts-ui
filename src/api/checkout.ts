import { axios } from './axios';

type CheckoutItem = {
  gift_id: number;
  quantity: number;
};

export type CheckoutProps = {
  message: string;
  items: CheckoutItem[];
};

type CheckoutResponse = {
  qr_code: string;
  br_code: string;
};

export type CreateUserProps = {
  first_name: string;
  last_name: string;
  email: string;
};

type CreateUserResponse = {
  first_name: string;
  last_name: string;
  email: string;
  auth_token: string;
};

export const postCheckout = async (data: CheckoutProps, token: string) => {
  const response = await axios.post<CheckoutResponse>('/checkouts/', data, {
    headers: { Authorization: `Token ${token}` },
  });
  return response.data;
};

export const createUser = async (data: CreateUserProps) => {
  const response = await axios.post<CreateUserResponse>('/users/', data).catch(error => {
    console.error(error.response.data);
    throw new Error('Erro ao criar usuário');
  });

  return response.data;
};
