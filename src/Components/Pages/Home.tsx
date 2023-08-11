import React from 'react';
import Image1 from '../../images/slider-slide-1-1464x660.jpg';
import Image2 from '../../images/slider-slide-2-1464x660.jpg';
import Image3 from '../../images/slider-slide-3-1464x660.jpg';
import ImageSlider from '../ImageSlider/ImageSlider';
import { useMediaQuery } from '@mui/material';
import '../ImageSlider/SliderStyles.css';

const Home = () => {
  const phoneView = useMediaQuery('(max-width: 500px)');
  const tabletView = useMediaQuery('(max-width: 768px)');

  const slides = [
    {
      url: Image1,
      alt: 'Image1',
      header: 'Scheduled Projects',
      content1:
        'Sitting down with a team, helping layout the project details, and working hard to keep us on schedule!',
      content2: '',
    },
    {
      url: Image2,
      alt: 'Image2',
      header: 'React Designs',
      content1:
        'I really love working on Front-End development. Im looking forward towards a future in Native React Development.',
      content2: '',
    },
    {
      url: Image3,
      alt: 'Image2',
      header: 'Professional Approach',
      content1:
        'Whatever type of development is about to launch, I enjoy working with the skills Ive learned, while learning new ones for future development projects!',
      content2: '',
    },
  ];

  return (
    <div className="container-fluid-1">
      <div
        className={
          phoneView
            ? 'slider-container-style-sm'
            : tabletView
            ? 'slider-container-style-md'
            : 'slider-container-style-lg'
        }
      >
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Home;
