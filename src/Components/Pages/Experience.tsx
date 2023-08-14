// import { useMediaQuery } from '@mui/material';
import React from 'react';
import Image1 from '../../images/video-preview-962x465.jpg';
import { useMediaQuery } from '@mui/material';

interface ExperienceProps {}

const Experience = (props: ExperienceProps) => {
  const phoneView = useMediaQuery('(max-width: 500px)');
  const tabletView = useMediaQuery('(max-width: 768px)');
  // const {} = props;

  return (
    <div className="container-fluid-0" style={{ overflowY: 'auto' }}>
      <div
        className={
          phoneView
            ? 'window-container-style-sm'
            : tabletView
            ? 'window-container-style-md'
            : 'window-container-style-lg'
        }
      >
        <div style={{ height: '95%', position: 'relative' }}>
          <div className="row m-0">
            <div className="col-12 col-md-6 p-0 border full-height">
              <img src={Image1} width={'100%'} height={'100%'} alt="image1" />
            </div>
            <div className="col-12 col-md-6 p-0 border full-height"></div>
          </div>
        </div>
        {/* <div className="slider-container">
          <div
            className="slider-style"
            style={{
              backgroundImage: `url(${Image1})`,
            }}
          ></div>
        </div> */}
        {/* <div className="row m-0 p-0">
          <div className="col-12 col-sm-6 p-0" style={{ backgroundImage: `url(${Image1})` }}></div>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
