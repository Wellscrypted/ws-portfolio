import React from 'react';
import './App.css';
import './fontStyles.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';

interface AppProps {}

const App = (props: AppProps) => {
  // const {} = props;

  return (
    <div className="container-fluid-0">
      <div className="row m-0">
        <div className="col-12 p-0">
          <Header />
        </div>
        <div className="col-12 p-0">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default App;
