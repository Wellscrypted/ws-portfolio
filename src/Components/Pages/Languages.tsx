import React from 'react';

interface LanguagesProps {
  topBars: number;
}

const Languages = (props: LanguagesProps) => {
  const { topBars } = props;
  console.log('Languages topBars: ', topBars);

  return <div>Languages</div>;
};

export default Languages;
