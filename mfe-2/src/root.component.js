import React from 'react';
import styled from 'styled-components';
import { Title } from 'styled-library';

const Title1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function Root(props) {
  return (
    <Wrapper>
      <Title1>Hello World!</Title1>
      <Title>Test</Title>
    </Wrapper>
  );
}
