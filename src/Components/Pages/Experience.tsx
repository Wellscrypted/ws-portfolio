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
            ? 'slider-container-style-sm'
            : tabletView
            ? 'slider-container-style-md'
            : 'slider-container-style-lg'
        }
      >
        <div className="row m-0 p-0 full-height" style={{ flexDirection: 'row-reverse' }}>
          <div className="col-sm-12 col-md-6 p-0 px-4 fs-16">
            <div className="section-md shell-fluid-cell">
              <div className="box-centered box-custom">
                <div className="ft-bold">
                  <h3>
                    <span>My Experience</span>
                    <span className="object-decorated object-decorated_inline">
                      <span className="heading-5">since 2004</span>
                    </span>
                  </h3>
                </div>
                <div className="ft-reg" style={{ lineHeight: '26px' }}>
                  <p>
                    I began my tech journey using self-teaching HTML and CSS online resources. In 2004 I attended a
                    technical college learning Network Administration, while practicing and maintaining my interest in
                    web page design. In 2005 I started a small business creating webpages and providing Tech Support. In
                    2009, due to the recession, we closed the business and I shifted away to other career paths.
                  </p>
                  <p>
                    In 2021, I reignited my tech passion and joined Emerging Digital Academy, where I learned
                    JavaScript, NodeJS, React, Material UI, and Bootstrap. After, I then focused on becoming a front-end
                    developer specializing in UI/UX. I worked at 701x, a company developing GPS Cattle tracking Tag
                    technology, where I lead the overall UI design, while I futher enhanced my skills in React Native,
                    TypeScript, and RNUI.
                  </p>
                  <p>
                    Currently I'm expanding my knowledge in AI, Machine Learning, and C# while seeking a new role. I
                    focused on joining a passionate team that values knowledge-sharing, helping me continue developing
                    my skills, while I contribute to impactful projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 reveal-flex p-0">
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
