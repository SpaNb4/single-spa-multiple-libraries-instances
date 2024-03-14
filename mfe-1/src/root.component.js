// MFE 1
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  background-color: blue;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: red;
`;

export default function MFE1() {
  return (
    <Wrapper>
      <Title>MFE 1</Title>
    </Wrapper>
  );
}
