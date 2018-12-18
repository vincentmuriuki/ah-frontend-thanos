import React from 'react';
import propTypes from 'prop-types';

export const CommentsPage = ({ comments }) => {
  const getCommentItems = comments.getCommentData.results.map(comment => (
    <div key={comment.id}>
      <div className="media border p-3 bg-light">
        <div className="media-body">
          <h6>
            {comment.comment_author.username}
          </h6>
          <p>{comment.comment_body}</p>
          <small>
            <i>
              Posted on  &ensp;
            </i>
            {comment.created_at}
          </small>
        </div>
      </div>
      <br />
    </div>
  ));

  return (
    <div className="col-sm-8 offset-2">
      <br />
      <div>{getCommentItems}</div>
    </div>
  );
};

CommentsPage.propTypes = {
  comments: propTypes.shape({}).isRequired,
};

export const CommentForm = ({ onSubmitHandler, onChangeHandler }) => (
  <div className="col-sm-8 offset-2">
    <h3> Comments </h3>
    <br />
    <form onSubmit={onSubmitHandler}>
      <div className="form-group">
        <p>Write your comment :</p>
        <textarea
          className="form-control"
          rows="5"
          id="comment"
          name="comment_body"
          onChange={onChangeHandler}
          required
        />
      </div>
      <button type="submit" className="btn btn-dark offset-10">Submit</button>
    </form>
    <br />
    <br />
  </div>


);

CommentForm.propTypes = {
  onChangeHandler: propTypes.func.isRequired,
  onSubmitHandler: propTypes.func.isRequired,
};
