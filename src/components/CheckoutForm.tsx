import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import styled from 'styled-components';

import { useCreateCheckoutMutation, useCreateUserMutation } from '../api/hooks/useCreateCheckout';
import { useCart } from '../contexts/CartContext';
import { QRCodeModal } from './QRCodeModal';

interface FormState {
  email: string;
  first_name: string;
  last_name: string;
  message: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  width: 325px;
  justify-content: center;
  align-items: center;
`;

export const CheckoutForm = () => {
  const createCheckout = useCreateCheckoutMutation();
  const createUser = useCreateUserMutation();
  const [isQRCodeModalOpen, setIsQRCodeModalOpen] = useState<boolean>(false);
  const [qrCodeUrl, setQRCodeUrl] = useState<string>('');
  const [brCode, setBrCode] = useState<string>('');
  const formInitialValues = {
    email: '',
    first_name: '',
    last_name: '',
    message: '',
  };
  const [formState, setFormState] = useState<FormState>(formInitialValues);
  const { state } = useCart();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const userData = {
      email: formState.email,
      first_name: formState.first_name,
      last_name: formState.last_name,
    };
    createUser.mutate({ userData });
  };

  useEffect(() => {
    const token = createUser?.data?.auth_token;
    if (!token) {
      return;
    }
    const checkoutData = {
      message: formState.message,
      items: state.items.map(item => ({
        gift_id: item.id,
        quantity: item.quantity,
      })),
    };
    createCheckout.mutate({ data: checkoutData, token: token });
    createUser.reset();
  }, [createUser?.data?.auth_token]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const qrCode = createCheckout.data?.qr_code;
    const brCode = createCheckout.data?.br_code;
    if (createCheckout.isSuccess && qrCode && brCode) {
      setQRCodeUrl(qrCode);
      setBrCode(brCode);
      setIsQRCodeModalOpen(true);
    }
  }, [createCheckout.isSuccess, createCheckout.data?.qr_code]); // eslint-disable-line react-hooks/exhaustive-deps

  const closeModal = () => {
    setIsQRCodeModalOpen(false);
    setFormState(formInitialValues);
    localStorage.removeItem('cart');
    window.location.reload();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <InputGroup style={{ flexDirection: 'row' }}>
          <InputContainer>
            <label>Nome</label>
            <input
              type="text"
              name="first_name"
              required={true}
              value={formState.first_name}
              onChange={handleChange}
              style={{
                width: '150px',
              }}
            />
          </InputContainer>
          <InputContainer>
            <label>Sobrenome</label>
            <input
              type="text"
              name="last_name"
              value={formState.last_name}
              onChange={handleChange}
              style={{
                width: '150px',
              }}
            />
          </InputContainer>
          <InputContainer>
            <label>Email</label>
            <input
              type="email"
              required={true}
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </InputContainer>
        </InputGroup>
        <InputGroup style={{ flexDirection: 'column' }}>
          <InputContainer>
            <label>Mensagem</label>
            <textarea
              name="message"
              required={true}
              value={formState.message}
              onChange={handleChange}
              style={{
                resize: 'vertical',
                width: '319px',
                height: '100px',
              }}
            />
          </InputContainer>
          <button type="submit">Gerar QR Code</button>
        </InputGroup>
      </form>
      {isQRCodeModalOpen && (
        <QRCodeModal qrCodeUrl={qrCodeUrl} brCode={brCode} onClose={closeModal} />
      )}
    </>
  );
};
