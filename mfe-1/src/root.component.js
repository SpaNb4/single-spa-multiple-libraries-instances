import { Library1 } from 'emotion-11-library-1';
import styled from '@emotion/styled';
import css from '@emotion/css';

const redStyle = () => css`
  color: red;
`;

const Title = styled.h1`
  color: pink;
  ${redStyle};
`;

export default function Root(props) {
  return (
    <section>
      <Title>Welcome!</Title>
      <Library1 />
    </section>
  );
}
