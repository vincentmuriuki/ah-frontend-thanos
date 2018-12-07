import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditProfile from '../../components/Profile/editProfile';
import { editProfileAction } from '../../actions/profileActions';
import { editProfile } from '../../actions/actionCreators';

export class EditProfilePage extends Component {
  state = { image: '' }

  handleUpdateFields = (event) => {
    const { name, value } = event.target;
    const { getUserInputs } = this.props;
    const { image } = this.state;
    getUserInputs({ [name]: value, image });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { editProfileDispatch, userProfile } = this.props;
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    editProfileDispatch(token, username, userProfile);
  };

  handleUpload = () => {
    const widget = window.cloudinary.openUploadWidget({
      cloud_name: 'rnantale',
      upload_preset: 'wrl5qbjv',
      cropping: true,
      folder: 'widgetdocs',
      sources: ['local', 'url', 'camera', 'facebook', 'dropbox', 'search', 'instagram'],
    }, (error, result) => {
      if (result.event === 'success') {
        const { editProfileDispatch } = this.props;
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        editProfileDispatch(token, username, { image: result.info.secure_url });
        widget.close();
      }
    });
  };

  render() {
    return (
      <EditProfile
        onChange={this.handleUpdateFields}
        onSubmit={this.handleSubmit}
        onClick={this.handleUpload}
      />
    );
  }
}

EditProfilePage.propTypes = {
  editProfileDispatch: PropTypes.func,
  getUserInputs: PropTypes.func,
  userProfile: PropTypes.shape({}),
};
EditProfilePage.defaultProps = {
  userProfile: {},
  editProfileDispatch: () => {},
  getUserInputs: () => {},

};
const mapStateToProps = ({ profileReducer }) => (
  { userProfile: profileReducer.profile }
);
export const mapDispatchToProps = dispatch => (
  {
    editProfileDispatch:
    (token, username, profile) => dispatch(editProfileAction(token, username, profile)),
    getUserInputs: obj => dispatch(editProfile(obj)),
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
