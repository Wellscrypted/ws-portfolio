import React from 'react';

interface HistoryProps {
  bodyHeight: number;
}

const History = (props: HistoryProps) => {
  const { bodyHeight } = props;
  console.log('History bodyHeight: ', bodyHeight);

  return <div>History</div>;
};

export default History;
