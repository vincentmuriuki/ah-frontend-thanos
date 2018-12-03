import React from 'react';
import PropTypes from 'prop-types';

const LoginSignupRedirect = ({ message, link, linkName }) => (
  <div className="small mt-3">
    <span>{message}</span>
    <a href={`/${link}`}>{linkName}</a>
  </div>
);

LoginSignupRedirect.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
};

export default LoginSignupRedirect;
