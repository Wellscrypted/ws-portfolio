import React from 'react';

interface ContactProps {
  bodyHeight: number;
}

const Contact = (props: ContactProps) => {
  const { bodyHeight } = props;
  console.log('Contact bodyHeight: ', bodyHeight);

  return <div>Contact</div>;
};

export default Contact;
