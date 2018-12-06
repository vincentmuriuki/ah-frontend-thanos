import React from 'react';
import * as PropTypes from 'prop-types';
import './Login.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const Login = ({ onChange, onSubmit }) => {
  const loginHtml = (
    <div className="container">
      <div className="col-left">
        <img
          src="https://images.pexels.com/photos/34072/pexels-photo.jpg"
          alt="Sign up poster"
        />
      </div>
      <div className="col-right">
        <form onSubmit={onSubmit}>
          <h3 className="text-center">Sign In</h3>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-control"
              id="email"
              pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
              title="Please provide a valid email address"
              required
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="**********"
              name="password"
              className="form-control"
              id="password"
              required
              onChange={onChange}
            />
          </div>
          <div className="signin-buttons">
            <button
              type="submit"
              className="btn btn-primary sign-in-bt"
              id="signInBt"
              name="signInBt"
            >
              Sign In
            </button>
            <div className="social-login-icons">
              <small className="text-muted p-1">
                Or Sign In with Social Media:
                {' '}
              </small>
              <div className="icons-group text-center">
                <FontAwesomeIcon
                  className="icon"
                  icon={['fab', 'facebook-f']}
                />
                <FontAwesomeIcon className="icon" icon={['fab', 'twitter']} />
                <FontAwesomeIcon className="icon" icon={['fab', 'google']} />
              </div>
            </div>
          </div>
          <div className="small mt-3">
            <span>Not yet a member? </span>
            <a href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
  return loginHtml;
};

Login.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
