// import { Library2 } from 'emotion-11-library-2';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const redStyle = () => css`
  color: yellow;
`;

const Title = styled.h1`
  color: pink;
  ${redStyle};
`;

export default function Root(props) {
  return (
    <section>
      <Title>Welcome!</Title>
      {/* <Library2 /> */}
    </section>
  );
}
