import React from 'react';
import Nav from 'react-bootstrap/Nav';
import MainLogo from '../images/mainlogo.png';

interface NavBarProps {}

const NavBar = (props: NavBarProps) => {
  //   const {} = props;

  return (
    <div className="container-fluid-1 py-3">
      <div className="row m-0">
        <div className="col-auto center-v-align">
          <img src={MainLogo} />
        </div>
        <div className="col">
          <Nav activeKey="/">
            <Nav.Item>
              <Nav.Link href="/" eventKey="Home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Experience" eventKey="Experience">
                My Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Projects" eventKey="Projects">
                My Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/History" eventKey="History">
                My History
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Languages" eventKey="Languages">
                Languages
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Contact" eventKey="Contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
