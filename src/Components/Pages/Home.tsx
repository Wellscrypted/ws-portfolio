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
      header: 'UI/UX Designs',
      content1: `Creating beautiful and functional designs using Bootstrap, Material-UI, Adobe Photoshop, Adobe Illustrator, and other custom library's.`,
      content2: '',
    },
    {
      url: Image2,
      alt: 'Image2',
      header: 'Responsive Platform Capabilities',
      content1: `I really enjoy creating with React Native for iOS and Android applications. Currently working on expanding my knowledge for React Native for Web.`,
      content2: '',
    },
    {
      url: Image3,
      alt: 'Image2',
      header: 'Front-End Developer',
      content1:
        'Helping to create a better user experience through the use of React, React Native, HTML, CSS, JavaScript, and TypeScript.',
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
        <ImageSlider slides={slides} timer={8} />
      </div>
    </div>
  );
};

export default Home;
