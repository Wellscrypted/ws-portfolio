import React from 'react';

interface LanguagesProps {
  bodyHeight: number;
}

const Languages = (props: LanguagesProps) => {
  const { bodyHeight } = props;
  console.log('Languages bodyHeight: ', bodyHeight);

  return <div>Languages</div>;
};

export default Languages;
