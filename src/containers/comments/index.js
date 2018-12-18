import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { CommentsPage, CommentForm } from '../../components/comments';
import { AllComments, CommentInput, PostComment } from '../../actions/commentActions';
import '../../components/comments/comments.scss';

class Comments extends Component {
  componentDidMount() {
    const { getArticlecomments, match } = this.props;
    const { articleId } = match.params;
    getArticlecomments(articleId);
  }

  handleOnChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const { commentInputFun, comments } = this.props;
    commentInputFun({ ...comments.commentInput, [name]: value });
  }

  handleComment = (event) => {
    event.preventDefault();
    const { comments: allComments, postComment, match } = this.props;
    const { articleId } = match.params;
    const data = {
      comments: { ...allComments.commentInput },
    };
    postComment(articleId, data);
  };

  render() {
    const { comments } = this.props;
    const token = localStorage.getItem('token');
    return (
      <div className="comment">
        {token ? (
          <CommentForm
            onChangeHandler={this.handleOnChange}
            onSubmitHandler={this.handleComment}
          />)
          : <span />
        }
        <div>
          {
            comments.getCommentData
              ? <CommentsPage comments={comments} />
              : <span />
          }
        </div>
      </div>
    );
  }
}
Comments.propTypes = {
  getArticlecomments: propTypes.func.isRequired,
  comments: propTypes.shape({}).isRequired,
  commentInputFun: propTypes.func.isRequired,
  postComment: propTypes.func.isRequired,
  match: propTypes.shape({}).isRequired,
};

const mapStateToProps = ({ comments }) => (
  { comments }
);

const mapDispatchToProps = dispatch => (
  {
    getArticlecomments: articleId => dispatch(AllComments(articleId)),
    commentInputFun: data => dispatch(CommentInput(data)),
    postComment: (articleId, data) => dispatch(PostComment(articleId, data)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
