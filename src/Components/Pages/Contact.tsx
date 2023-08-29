import { useMediaQuery } from '@mui/material';
import React from 'react';

interface ContactProps {
  bodyHeight: number;
}

const Contact = (props: ContactProps) => {
  const { bodyHeight } = props;
  const tabletView = useMediaQuery('(max-width: 767px)');

  const InfoRow = (props: any) => {
    const { children } = props;
    return <div className="col-12 col-md-6 p-0 row m-0 my-2">{children}</div>;
  };
  const LeftCell = (props: any) => {
    const { children } = props;
    return (
      <div className="col-5 p-0 ft-reg fs-16 px-2 right-align" style={{ color: '#ebd618' }}>
        {children}
      </div>
    );
  };
  const RightCell = (props: any) => {
    const { children, textCentered, fullWidth } = props;
    return (
      <div
        className={`${fullWidth ? 'col-12' : 'col-7'} p-0 ft-reg fs-16 px-2 `}
        // className="col-6 p-0 ft-reg fs-16 px-2 border"
        style={{ color: '#fff', textAlign: textCentered ? 'center' : 'left' }}
      >
        {children}
      </div>
    );
  };

  return (
    <div
      className="container-fluid-0 p-4"
      style={{ overflowY: 'auto', height: `${bodyHeight}px`, backgroundColor: '#151515' }}
    >
      <div className="row m-0 p-0 center-align">
        <InfoRow>
          <LeftCell>Wellscrypted</LeftCell>
          <RightCell>West Fargo, ND 58078</RightCell>
        </InfoRow>
      </div>
      <div className="row m-0 p-0">
        <InfoRow>
          <LeftCell>LinkedIn:</LeftCell>
          <RightCell>
            <a href="https://www.linkedin.com/in/aj-wells" target="_blank" className="link-styles">
              www.linkedin.com/in/aj-wells
            </a>
          </RightCell>
        </InfoRow>
        <InfoRow>
          <LeftCell>GitHub:</LeftCell>
          <RightCell>
            <a href="https://github.com/wells19d" target="_blank" className="link-styles">
              github.com/wells19d
            </a>
          </RightCell>
        </InfoRow>
        <InfoRow>
          <LeftCell>Email:</LeftCell>
          <RightCell>ajwells@wellscrypted.com</RightCell>
        </InfoRow>
        <InfoRow>
          <LeftCell>Phone:</LeftCell>
          <RightCell>(701) 306-4705</RightCell>
        </InfoRow>
      </div>
      <div className="row m-0 p-0 center-align">
        <InfoRow>
          <RightCell textCentered fullWidth>
            Wellscrypted © 2023
          </RightCell>
        </InfoRow>
      </div>
    </div>
  );
};

export default Contact;
