import React, { useCallback, useEffect, useRef, useState } from 'react';
import IconListRouter from '../../IconRouter/IconRouter';
import './SliderStyles.css';

interface ImageSliderProps {
  slides: any;
  timer?: number;
}

const ImageSlider = (props: ImageSliderProps) => {
  const { slides, timer } = props;
  const timerRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const [sliderTime, setSliderTime] = useState<any>(0);

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
    if (timer) {
      setSliderTime(timer * 1000);
    } else {
      setSliderTime(999999999);
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      next();
    }, sliderTime);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [next, timer, sliderTime]);

  return (
    <div className="slider-container">
      <div
        className="slider-style"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
      >
        <div className="container-fluid-0 full-height">
          <div className="row m-0 full-height">
            <div className="col-1 center-v-align">
              <div className="arrow-container-left" onClick={prev}>
                <div className="arrow-button">
                  <IconListRouter.LeftArrowIcon style={{ fill: '#ffe500' }} size={'30px'} />
                </div>
              </div>
            </div>
            <div className="col-10 center-vh-align">
              <div className="slide-effect">
                <div className="row m-0">
                  <div className={`col-12 p-0 text-center fs-36 text-${currentIndex} ft-bold`}>
                    {slides[currentIndex].header}
                  </div>
                  <div className={`col-12 p-0 text-center fs-18 slideUp-${currentIndex} ft-reg`}>
                    {slides[currentIndex].content1}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 center-v-align right-align">
              <div className="arrow-container-right" onClick={next}>
                <div className="arrow-button">
                  <IconListRouter.RightArrowIcon style={{ fill: '#ffe500' }} size={'30px'} />
                </div>
              </div>
            </div>
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
