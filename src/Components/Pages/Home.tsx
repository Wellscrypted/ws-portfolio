import React from 'react';
import Image1 from '../../images/slider-slide-1-1464x660.jpg';
import Image2 from '../../images/slider-slide-2-1464x660.jpg';
import Image3 from '../../images/slider-slide-3-1464x660.jpg';
import ImageSlider from '../ImageSlider/ImageSlider';
import '../ImageSlider/SliderStyles.css';

interface HomeProps {
  bodyHeight: number;
}

const Home = (props: HomeProps) => {
  const { bodyHeight } = props;

  const slides = [
    {
      url: Image2,
      alt: 'Image2',
      header: 'Front-End Developer',
      content1:
        'Helping to create a better user experience through the use of React, React Native, HTML, CSS, JavaScript, and TypeScript.',
      content2: '',
    },
    {
      url: Image1,
      alt: 'Image1',
      header: 'UI/UX Designs',
      content1: `Creating beautiful and functional designs using Bootstrap, Material-UI, Adobe Photoshop, Adobe Illustrator, and other custom library's.`,
      content2: '',
    },
    {
      url: Image3,
      alt: 'Image3',
      header: 'Responsive Platform Capabilities',
      content1: `Using React Native for creating iOS and Android applications. Soon developing in React Native for Web.`,
      content2: '',
    },
  ];

  return (
    <div className="container-fluid-0 p-4" style={{ overflowY: 'auto', height: `${bodyHeight}px` }}>
      <ImageSlider slides={slides} componentFocus={'Home'} timer={8} />
    </div>
  );
};

export default Home;
