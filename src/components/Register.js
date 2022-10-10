import React from 'react';
import Form from './Input';
import './register.css';
export default function Register() {
  return (
    <>
      <div className="register-container" style={{}}>
        <div className="user_header">
          <img
            src="https://static.feednews.com/wemedia/static/media/studiologo.8fe0c0a3.png"
            alt="studiologo"
            className="user_opera_logo"
          />
          <button className="user_sign_out">Sign Out</button>
        </div>
        <div className="register-content">
          <div className="register-main">
            <div className="register-nav">
              <div className="register-nav-tab nav-tav-active">
                1
                <p>
                  <span>Account Information</span>
                </p>
              </div>
              <div className="register-nav-line "></div>
              <div className="register-nav-tab ">
                2
                <p>
                  <span>Author Information</span>
                </p>
              </div>
            </div>
            <div className="register-main-body">
              <h3>Account Information</h3>
              <Form />
              <div className="register-main-footer">
                <button className="register-btn-default">Back</button>
                <button className="register-btn-default register-btn-primary">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
