import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import Routes from './Routes';
import { LinkContainer } from "react-router-bootstrap";
import { Auth } from 'aws-amplify';

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (err) {
      if (err !== 'No current user') {
        alert(err);
      }
    }
    setIsAuthenticating(false);
  }

  const handleLogout = async () => {
    await Auth.signOut();
    userHasAuthenticated(false);
    props.history.push("/login");
  }


  return (
    !isAuthenticating &&
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Booyah</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {isAuthenticated
              ? <NavItem onClick={handleLogout}>Logout</NavItem>
              : <>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>login</NavItem>
                </LinkContainer>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );
}

export default withRouter(App);
