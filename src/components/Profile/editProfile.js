import React from 'react';
import './profile.scss';
import PropTypes from 'prop-types';

const formElements = [
  {
    inputType: 'text',
    elementId: 'first_name',
    placeholder: 'First Name',
  },
  {
    inputType: 'text',
    elementId: 'last_name',
    placeholder: 'Last Name',
  },
];

const FormInput = ({ el, onChange, onClick }) => {
  const { inputType, elementId, placeholder } = el;
  return (

    <div className="form-group">
      <input
        type={inputType}
        placeholder={placeholder}
        className="form-control"
        id={elementId}
        name={elementId}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
};

FormInput.propTypes = {
  el: PropTypes.shape({
    inputType: PropTypes.string.isRequired,
    elementId: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};
FormInput.defaultProps = {
  onClick: () => {},
};

const EditProfile = ({ onSubmit, onChange, onClick }) => (

  <div className="container">
    <h1 className="title">Edit Profile</h1>
    <hr />
    <div className="row">
      <div className="col-md-3">
        <div className="text-center">
          <img src="http://www.macmillanenglish.com/img/author-image.png" className="img-fluid" alt="avatar" />
          <h6>Upload a different photo...</h6>
          <div className="col-lg-8 mt-2">
            <button type="submit" className="btn button" onClick={onClick}>Upload</button>
          </div>
        </div>

      </div>

      <div className="col-md-9 personal-info">
        <h3 className="pl-3">Personal info</h3>

        <form className="form-horizontal" onSubmit={onSubmit}>
          {formElements.map(el => <FormInput onChange={onChange} el={el} key={el.elementId} />)}
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="bio"
            onChange={onChange}
            placeholder="Tell us something about yourself."
          />
          <div className="col-lg-8">
            <button type="submit" className="btn  btn-outline-primary mt-4 button">Save Changes</button>
            <span className="mr-2" />
            <button type="submit" className="btn btn-outline-danger mt-4">Cancel</button>
          </div>
        </form>
      </div>

    </div>
  </div>

);
EditProfile.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
};
EditProfile.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
  onClick: () => {},
};

export default EditProfile;
