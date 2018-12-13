import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserInput, userSignup } from '../../actions/userActions';
import SignUp from '../../components/signup';


export class SignUpPage extends Component {
  handleUpdateFields = (event) => {
    const { name, value } = event.target;
    const { freshUser, getUserInputs } = this.props;
    getUserInputs({ ...freshUser, [name]: value });
  };

  handleSignUp = (event) => {
    event.preventDefault();
    const { freshUser, signUpuser } = this.props;
    signUpuser({ user: freshUser });
  };

  render() {
    return (
      <SignUp
        onChange={this.handleUpdateFields}
        onSubmit={this.handleSignUp}
      />
    );
  }
}

SignUpPage.propTypes = {
  signUpuser: PropTypes.func,
  getUserInputs: PropTypes.func,
  freshUser: PropTypes.shape({}),
};
SignUpPage.defaultProps = {
  signUpuser: () => {},
  getUserInputs: () => {},
  freshUser: {},
};

const mapStateToProps = ({ userReducer }) => (
  { freshUser: userReducer.freshUser }
);

export const mapDispatchToProps = dispatch => (
  {
    signUpuser: user => dispatch(userSignup(user)),
    getUserInputs: obj => dispatch(getUserInput(obj)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
