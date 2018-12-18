import React from 'react';
import * as PropTypes from 'prop-types';

const DeleteArticle = ({ onClick }) => (
  <div>
    <button type="submit" onClick={onClick} className="btn btn-danger">DELETE ARTICLE</button>
  </div>
);

DeleteArticle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteArticle;
