import React, { useCallback, useEffect, useRef, useState } from 'react';
import IconListRouter from '../../IconRouter/IconRouter';
import './SliderStyles.css';

interface ImageSliderProps {
  slides: any;
}

const ImageSlider = (props: ImageSliderProps) => {
  const { slides } = props;
  const timerRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState<any>(0);

  const prev = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };
  const next = useCallback(() => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      next();
    }, 5000);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [next]);

  return (
    <div className="slider-container">
      {/* <div className="arrow-container-left" onClick={prev}>
        <div className="arrow-button">
          <IconListRouter.LeftArrowIcon style={{ fill: '#ffe500' }} size={'30px'} />
        </div>
      </div> */}
      {/* <div className="arrow-container-right" onClick={next}>
        <div className="arrow-button">
          <IconListRouter.RightArrowIcon style={{ fill: '#ffe500' }} size={'30px'} />
        </div>
      </div> */}
      <div
        className="slider-style"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
      >
        <div className="container-fluid-0" style={{ border: 'solid black 1px', height: '100%' }}>
          <div className="row m-0" style={{ border: 'solid red 1px', height: '100%' }}>
            <div className="col-1" style={{ border: 'solid green 1px', height: '100%' }}>
              <div className="arrow-container-left" onClick={prev}>
                <div className="arrow-button">
                  <IconListRouter.LeftArrowIcon style={{ fill: '#ffe500' }} size={'30px'} />
                </div>
              </div>
            </div>
            <div className="col-10" style={{ border: 'solid green 1px', height: '100%' }}></div>
            <div className="col-1" style={{ border: 'solid green 1px', height: '100%' }}></div>
          </div>
        </div>
      </div>
      <div className="dot-container">
        {slides.map((slide: any, slideIndex: any) => {
          return (
            <div key={slideIndex} className="dot-styles" onClick={() => goToSlide(slideIndex)}>
              <div>
                <IconListRouter.DotIcon size={30} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
