import { useMediaQuery } from '@mui/material';
import React from 'react';
// import { Container } from 'react-bootstrap';
import image1 from '../../images/video-preview-962x465.jpg';

interface ExperienceProps {}

const Experience = (props: ExperienceProps) => {
  // const {} = props;
  const phoneView = useMediaQuery('(max-width: 500px)');
  const tabletView = useMediaQuery('(max-width: 768px)');
  // const showPicture = useMediaQuery('(max-width: 576px)');

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
        <div className="row m-0 p-0 full-height" style={{ flexDirection: 'row-reverse' }}>
          <div className="col-sm-12 col-md-6 border p-0 px-4">
            <div className="section-md shell-fluid-cell">
              <div className="box-centered box-width-1 box-custom">
                <h3>
                  <span>My Experience</span>
                  <span className="object-decorated object-decorated_inline" style={{ maxWidth: '125px' }}>
                    <span className="heading-5">since 2004</span>
                  </span>
                </h3>
                <p>
                  I started some of my skills through self-taught methods and extended them though a technical college
                  for Network Administration. Soon after I transferred the skills I learned into a small business
                  startup, building webpages from HTML, CSS, and Adobe Flash. Recently I continued my education throught
                  a Bootcamp at Emerging Digital Academy using JavaScript NodeJS & React, C#, Material UI, and
                  Bootstrap. I’ll be continuing my education, with more self-taught skills, using TypeScript & Tailwind.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 reveal-flex border p-0">
            <div className="thumb-video">
              <img className="thumb-video__image" src={image1} alt="" width="962" height="465" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
