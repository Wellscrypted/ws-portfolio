import React from 'react';
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
import { Navbar } from 'react-bootstrap';

const App = () => {
  const WSNavItem = (props: any) => {
    const { children } = props;
    return <Nav.Item className="mx-1">{children}</Nav.Item>;
  };

  return (
    <Router>
      <div className="container-fluid-0">
        <div className="row m-0">
          <div className="col-12 p-0">
            <Header />
          </div>
          <div className="col-12 p-0">
            <div className="container-fluid-1 py-3">
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
            </div>
          </div>
          <div className="col-12 p-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/history" element={<History />} />
              <Route path="/languages" element={<Languages />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
