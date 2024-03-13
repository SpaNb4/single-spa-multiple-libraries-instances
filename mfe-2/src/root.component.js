// MFE 2
import React from 'react';
import styled from 'styled-components';
import { Button, Input } from 'styled-library';

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
      <Button primary>Button from MFE 2</Button>
      <Input placeholder="Input from MFE 2" />
    </Wrapper>
  );
}
