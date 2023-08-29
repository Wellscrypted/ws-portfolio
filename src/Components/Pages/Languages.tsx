import React from 'react';

interface LanguagesProps {
  bodyHeight: number;
}

const Languages = (props: LanguagesProps) => {
  const { bodyHeight } = props;
  console.log('Languages bodyHeight: ', bodyHeight);

  return (
    <div className="container-fluid-0 p-4" style={{ overflowY: 'auto', height: `${bodyHeight}px` }}>
      <div className="d-flex align-items-center justify-content-center full-height">
        <div style={{ position: 'relative', top: '-100px' }}>
          <div className="ft-bold fs-20 center-align">Under New Developement</div>
          <div className="ft-reg fs-18  center-align">Check Back Soon</div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
