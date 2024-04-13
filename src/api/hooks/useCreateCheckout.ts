import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { CheckoutProps, CreateUserProps, createUser, postCheckout } from '../checkout';

export const useCreateUserMutation = () => {
  return useMutation(({ userData }: { userData: CreateUserProps }) => createUser(userData), {
    onError: () => {
      toast.error('Erro ao criar usuário');
    },
    mutationKey: 'user',
  });
};

export const useCreateCheckoutMutation = () => {
  return useMutation(
    ({ data, token }: { data: CheckoutProps; token: string }) => postCheckout(data, token),
    {
      onError: () => {
        toast.error('Erro ao realizar checkout');
      },
    },
  );
};
