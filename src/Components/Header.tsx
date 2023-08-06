import React from 'react';
import IconListRouter from '../IconRouter/IconRouter';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  // const {} = props;
  return (
    <div className="container-fluid-0" style={{ backgroundColor: 'black' }}>
      <div className="row m-0" style={{ minHeight: '52px' }}>
        <div className="col-6 col-md-8 col-lg-9 p-0 center-v-align">
          <div className="row m-0">
            <div className="col-auto p-0 center-v-align px-3">
              <IconListRouter.FaAward style={{ fill: '#ffe500', height: 20 }} />
            </div>
            <div className="col p-0">
              <div className="ft-reg sp-1 fs-14" style={{ color: '#aaa' }}>
                Front-End UI/UX (React / React Native - JavaScript / TypeScript) Developer
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3 p-0 right-align center-v-align px-4">
          <div className="row m-0">
            <div className="col-auto p-0 px-2">
              <div className="ft-reg sp-1 fs-14" style={{ color: '#ffe500' }}>
                Phone:
              </div>
            </div>
            <div className="col p-0">
              <div className="ft-reg sp-1 fs-14" style={{ color: '#aaa' }}>
                (701) 306–4705
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;