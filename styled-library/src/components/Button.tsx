import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  children?: React.ReactNode;
}

const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? 'blue' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  padding: 8px 16px;
  border: 2px solid blue;
  border-radius: 4px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ primary = false, children }) => {
  return <ButtonStyled primary={primary}>{children}</ButtonStyled>;
};

export default Button;
