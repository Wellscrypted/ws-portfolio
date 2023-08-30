import React from 'react';

interface ContactProps {
  bodyHeight: number;
}

const LeftCell = (props: any) => {
  const { children } = props;
  return (
    <div className="ft-reg fs-16 me-2" style={{ color: '#ebd618' }}>
      {children}
    </div>
  );
};
const RightCell = (props: any) => {
  const { children } = props;
  return (
    <span className="ft-reg fs-16" style={{ color: '#fff' }}>
      {children}
    </span>
  );
};

const Contact = (props: ContactProps) => {
  const { bodyHeight } = props;

  return (
    <div
      className="container-fluid-0"
      style={{ overflow: 'auto', height: `${bodyHeight}px`, backgroundColor: '#151515' }}
    >
      <div className="row m-0 p-0 full-height">
        <div className="col-12 p-0 center-v-align" style={{ height: '100%' }}>
          <div className="container-fluid-0 m-0 p-0">
            <div className="row m-0 p-0">
              <div className="col-12 col-md-6 center-vh-align m-0 my-1 p-0">
                <LeftCell>Wellscrypted</LeftCell>
                <RightCell>West Fargo, ND 58078</RightCell>
              </div>
              <div className="col-12 col-md-6 center-vh-align m-0 my-1 p-0">
                <LeftCell>LinkedIn:</LeftCell>
                <RightCell>
                  <a
                    href="https://www.linkedin.com/in/aj-wells"
                    target="_blank"
                    className="link-styles"
                    rel="noreferrer"
                  >
                    www.linkedin.com/in/aj-wells
                  </a>
                </RightCell>
              </div>
              <div className="col-12 col-md-6 center-vh-align m-0 my-1 p-0">
                <LeftCell>GitHub:</LeftCell>
                <RightCell>
                  <a href="https://github.com/wells19d" target="_blank" className="link-styles" rel="noreferrer">
                    github.com/wells19d
                  </a>
                </RightCell>
              </div>
              <div className="col-12 col-md-6 center-vh-align m-0 my-1 p-0">
                <LeftCell>Email:</LeftCell>
                <RightCell>ajwells@wellscrypted.com</RightCell>
              </div>
              <div className="col-12 col-md-6 center-vh-align m-0 my-1 p-0">
                <LeftCell>Phone:</LeftCell>
                <RightCell>(701) 306-4705</RightCell>
              </div>
              <div className="col-12 col-md-6 center-vh-align m-0 my-1 p-0">
                <RightCell>Wellscrypted © 2023</RightCell>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
