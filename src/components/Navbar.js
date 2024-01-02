import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import mainLogo from "./icon.png";
import { NavDropdown } from "react-bootstrap";
import Profile from "../pages/Profile";
import { Link } from "react-router-dom";

// Login with Auth0
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Nav.Link className="btn btn-black btn-hover" onClick={() => loginWithRedirect()}>
      Login
    </Nav.Link>
  );
};

// User Profile Dropdown
const UserProfileDropdown = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const [showProfile, setShowProfile] = useState(false);

  const openProfile = () => setShowProfile(true);
  const closeProfile = () => setShowProfile(false);

  if (isAuthenticated) {
    return (
      <Nav className="gap-2 align-items-center">
        <NavDropdown
          title={
            <>
              <img
                src={user.picture}
                alt={user.name}
                width="30"
                height="30"
                className="d-inline-block align-top rounded-circle me-2"
              />
              {user.name}
            </>
          }
          id="basic-nav-dropdown"
          className="btn btn-black"
        >
          <Link to="/profile" className="dropdown-item">
            Profile
          </Link>
          <NavDropdown.Item
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            {" "}
            Logout{" "}
          </NavDropdown.Item>
        </NavDropdown>

        {showProfile && <Profile onClose={closeProfile} />}
      </Nav>
    );
  } else {
    return (
      <Nav className="gap-2">
        <Nav.Link className="btn btn-black">
          <LoginButton />
        </Nav.Link>
      </Nav>
    );
  }
};

export default function App() {
  return (
    <>
      <Navbar bg="black" variant="dark" expand="lg" className="p-3 sticky-top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={mainLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Tasty-Tips
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="btn btn-black btn-hover" href="./">Home</Nav.Link>
              <Nav.Link className="btn btn-black btn-hover" href="./">About us</Nav.Link>
              <Nav.Link className="btn btn-black btn-hover" href="./contactus">Contact us</Nav.Link>
            </Nav>
            <UserProfileDropdown />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
