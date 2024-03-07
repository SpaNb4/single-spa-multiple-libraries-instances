/** @jsxImportSource @emotion/react */
import React from 'react';

export default function Root(props) {
  return (
    <section
      css={{
        color: 'hotpink',
      }}
    >
      React version <b>{React.version}</b> is mounted!
    </section>
  );
}
