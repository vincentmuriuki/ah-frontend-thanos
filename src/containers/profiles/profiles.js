import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileAction } from '../../actions/profileActions';
import ViewProfile from '../../components/Profile/viewProfile';

export class Profile extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    dispatch(getProfileAction({ username, token }));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn === false) {
      const { history } = this.props;
      history.push('/login');
    }
  }

  render() {
    const {
      profile: {
        username, image, bio, firstname, lastname, isLoggedIn,
      },
    } = this.props;
    return (
      isLoggedIn && (
      <ViewProfile
        username={username}
        image={image}
        bio={bio}
        first_name={firstname}
        lastname={lastname}
      />)
    );
  }
}

Profile.propTypes = {
  isLoggedIn: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  profile: PropTypes.shape({}),
  history: PropTypes.shape({}),
};

Profile.defaultProps = {
  profile: {},
  isLoggedIn: true,
  history: {},
};
const mapStateToProps = ({ profileReducer }) => ({
  profile: profileReducer.profile,
});
export default connect(mapStateToProps)(Profile);
