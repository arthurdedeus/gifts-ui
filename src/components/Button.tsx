import { ButtonHTMLAttributes } from 'react';

import styled from 'styled-components';

const BaseButton = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  padding: 5px 10px;
  font-size: 0.9rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;

  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #e6e6e6;
  }
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const Button = ({ text, ...props }: ButtonProps) => {
  return <BaseButton {...props}>{text}</BaseButton>;
};
