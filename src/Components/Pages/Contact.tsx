import React from 'react';

interface ContactProps {
  topBars: number;
}

const Contact = (props: ContactProps) => {
  const { topBars } = props;
  console.log('Contact topBars: ', topBars);

  return <div>Contact</div>;
};

export default Contact;
