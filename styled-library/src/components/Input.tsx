import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  padding: 8px;
  border: 2px solid blue;
  border-radius: 4px;
`;

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <InputStyled {...props} />;
};

export default Input;
