import { ChangeEvent, FormEvent, useState } from 'react';

import styled from 'styled-components';

interface FormState {
  email: string;
  name: string;
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
  const [formState, setFormState] = useState<FormState>({
    email: '',
    name: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formState);
    // TODO: Handle submit
  };

  return (
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
            name="name"
            value={formState.name}
            onChange={handleChange}
            style={{
              width: '150px',
            }}
          />
        </InputContainer>
        <InputContainer>
          <label>Email</label>
          <input type="email" name="email" value={formState.email} onChange={handleChange} />
        </InputContainer>
      </InputGroup>
      <InputGroup style={{ flexDirection: 'column' }}>
        <InputContainer>
          <label>Mensagem</label>
          <textarea
            name="message"
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
  );
};
