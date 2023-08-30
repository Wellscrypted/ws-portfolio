import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import './fontStyles.css';
import './customStyles.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Nav from 'react-bootstrap/Nav';
import MainLogo from './images/mainlogo.png';
import Experience from './Components/Pages/Experience';
import Projects from './Components/Pages/Projects';
import History from './Components/Pages/History';
import Languages from './Components/Pages/Languages';
import Contact from './Components/Pages/Contact';
import { Container, Navbar } from 'react-bootstrap';
import useMediaQuery from '@mui/material/useMediaQuery';
import { isMobile } from 'react-device-detect';

const App = () => {
  const WSNavItem = (props: any) => <Nav.Item className="col center-vh-align p-0 mx-1">{props.children}</Nav.Item>;
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [topBars, setTopBars] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const setPosition = useMediaQuery('(min-width:767px)');

  const updateCombinedHeight = () => {
    const headerHeight = headerRef.current?.clientHeight || 0;
    const navHeight = navRef.current?.clientHeight || 0;
    setTopBars(headerHeight + navHeight);
  };

  useEffect(() => {
    updateCombinedHeight();
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      updateCombinedHeight();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bodyHeight = windowHeight - topBars;

  return (
    <Router>
      <div className="container-fluid-0">
        <div className="row m-0">
          <div className="col-12 p-0" ref={headerRef}>
            <Header />
          </div>
          <div className="col-12 p-0" ref={navRef}>
            <div className="container-fluid-1  pb-2">
              <div className="row m-0">
                <div className={`col-12 col-md-auto auto m-0 p-0 center-vh-align ${setPosition ? '' : 'pt-3'}`}>
                  <img src={MainLogo} alt="logo" />
                </div>
                <div
                  className={`col center-vh-align ${setPosition ? 'justify-content-end' : ''} ${
                    isMobile ? 'm-0 p-0' : 'me-4 m-0 p-0'
                  }`}
                >
                  <Navbar data-bs-theme="light">
                    <Nav variant="underline">
                      <div className="row m-0 pt-2">
                        <WSNavItem>
                          <Nav.Link as={Link} to="/" eventKey="" className="ft-reg sp-1">
                            Home
                          </Nav.Link>
                        </WSNavItem>
                        <WSNavItem>
                          <Nav.Link as={Link} to="/experience" eventKey="experience" className="ft-reg sp-1">
                            Experience
                          </Nav.Link>
                        </WSNavItem>
                        <WSNavItem>
                          <Nav.Link as={Link} to="/projects" eventKey="projects" className="ft-reg sp-1">
                            Projects
                          </Nav.Link>
                        </WSNavItem>
                        <WSNavItem>
                          <Nav.Link as={Link} to="/history" eventKey="history" className="ft-reg sp-1">
                            History
                          </Nav.Link>
                        </WSNavItem>
                        <WSNavItem>
                          <Nav.Link as={Link} to="/languages" eventKey="languages" className="ft-reg sp-1">
                            Languages
                          </Nav.Link>
                        </WSNavItem>
                        <WSNavItem>
                          <Nav.Link as={Link} to="/contact" eventKey="contact" className="ft-reg sp-1">
                            Contact
                          </Nav.Link>
                        </WSNavItem>
                      </div>
                    </Nav>
                  </Navbar>
                </div>
                {/*  */}
              </div>
            </div>

            {/* <div className="container-fluid-1 py-3">
              <div className="row m-0">
                <div className="col-auto center-vh-align p-0">
                  <img src={MainLogo} alt="logo" />
                </div>
                <div className="col p-0 center-v-align justify-content-end px-2 pe-5">
                  <Navbar data-bs-theme="light">
                    <Nav variant="underline">
                      <WSNavItem>
                        <Nav.Link as={Link} to="/" eventKey="" className="ft-reg sp-1">
                          Home
                        </Nav.Link>
                      </WSNavItem>
                      <WSNavItem>
                        <Nav.Link as={Link} to="/experience" eventKey="experience" className="ft-reg sp-1">
                          Experience
                        </Nav.Link>
                      </WSNavItem>
                      <WSNavItem>
                        <Nav.Link as={Link} to="/projects" eventKey="projects" className="ft-reg sp-1">
                          Projects
                        </Nav.Link>
                      </WSNavItem>
                      <WSNavItem>
                        <Nav.Link as={Link} to="/history" eventKey="history" className="ft-reg sp-1">
                          History
                        </Nav.Link>
                      </WSNavItem>
                      <WSNavItem>
                        <Nav.Link as={Link} to="/languages" eventKey="languages" className="ft-reg sp-1">
                          Languages
                        </Nav.Link>
                      </WSNavItem>
                      <WSNavItem>
                        <Nav.Link as={Link} to="/contact" eventKey="contact" className="ft-reg sp-1">
                          Contact
                        </Nav.Link>
                      </WSNavItem>
                    </Nav>
                  </Navbar>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-12 p-0" ref={bodyRef}>
            <Routes>
              <Route path="/" element={<Home bodyHeight={bodyHeight} />} />
              <Route path="/experience" element={<Experience bodyHeight={bodyHeight} />} />
              <Route path="/projects" element={<Projects bodyHeight={bodyHeight} />} />
              <Route path="/history" element={<History bodyHeight={bodyHeight} />} />
              <Route path="/languages" element={<Languages bodyHeight={bodyHeight} />} />
              <Route path="/contact" element={<Contact bodyHeight={bodyHeight} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
