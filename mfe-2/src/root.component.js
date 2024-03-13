// MFE 2
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  background-color: green;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: red; // intentionally using the same style as MFE 1
`;

export default function MFE2() {
  return (
    <Wrapper>
      <Title>MFE 2</Title>
    </Wrapper>
  );
}
