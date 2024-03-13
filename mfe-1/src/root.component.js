// MFE 1
import React from 'react';
import styled from 'styled-components';
import { Button, Input } from 'styled-library';

const Wrapper = styled.div`
  padding: 20px;
  background-color: blue;
`;

export default function MFE1() {
  return (
    <Wrapper>
      <Button primary>Button from MFE 1</Button>
      <Input placeholder="Input from MFE 1" />
    </Wrapper>
  );
}
