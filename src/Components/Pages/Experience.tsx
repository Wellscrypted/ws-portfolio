import { useMediaQuery } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import image1 from '../../images/video-preview-962x465.jpg';

interface ExperienceProps {}

const Experience = (props: ExperienceProps) => {
  // const {} = props;
  const phoneView = useMediaQuery('(max-width: 500px)');
  const tabletView = useMediaQuery('(max-width: 768px)');
  const showPicture = useMediaQuery('(max-width: 576px)');

  return (
    <div className="container-fluid-0" style={{ overflowY: 'auto' }}>
      <div
        className={
          phoneView
            ? 'container-style-sm p-0 m-0'
            : tabletView
            ? 'container-style-md p-0 m-0'
            : 'container-style-lg p-0 m-0'
        }
      >
        <div className="row m-0 p-0 full-height">
          {!showPicture && (
            <div
              className="col-0 col-sm-5 col-md-4 m-0 p-0 border border-success"
              style={{
                backgroundImage: `url(${image1})`,
                height: '50%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
          )}
          <div className="col-12 col-sm-7 col-md-8 m-0 p-0 border border-success">test2</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
