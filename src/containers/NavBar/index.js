import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const NavBar = ({ testMessage }) => <div>{testMessage}</div>;

NavBar.propTypes = {
  testMessage: PropTypes.string.isRequired
};

const mapStateToProps = ({ user }) => ({
  // get testMessage form the user reducer
  testMessage: user.testMessage
});
export default connect(mapStateToProps)(NavBar);
