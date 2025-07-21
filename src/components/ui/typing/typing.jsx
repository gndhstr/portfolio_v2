import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typing = ({ sequence }) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.4rem', color:'rgb(147 51 234)', fontWeight: '700', display: 'inline-block' }}
    />
  );
};

export default Typing;
