import React from 'react';

interface HistoryProps {
  topBars: number;
}

const History = (props: HistoryProps) => {
  const { topBars } = props;
  console.log('History topBars: ', topBars);

  return <div>History</div>;
};

export default History;
