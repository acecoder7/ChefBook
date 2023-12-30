import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from "../components/Navbar";
import mainLogo from "../components/icon.png";

const ProfilePage = ({ onClose }) => {
  const { user, logout } = useAuth0();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      // Redirect to the home page if onClose is not provided
      navigate('/');
    }
  };

  return (
    <>
    <Navbar />
          <img
            alt=""
            src={mainLogo}
            width="100"
            height="100"
            className="logo"
            text-align="center"
      />

    <div className="container mt-5">
    <div className="profile-container text-center">
      <h2>User Profile</h2>
      <img
        src={user.picture}
        alt={user.name}
        width="100"
        height="100"
        className="rounded-circle"
      />
      <p className="mt-3">Name: {user.name}</p>
          <p>Email: {user.email}</p>
      <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-secondary me-3" onClick={handleClose}>
              Back
            </button>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
      </div>
      </div>
      </div>
      </>
  );
};

export default ProfilePage;