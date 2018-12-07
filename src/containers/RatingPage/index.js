import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './RatingPage.scss';
import { postRating, postRatingData, fetchRatingThunk } from '../../actions/ratingActions';
import { Rating, RatingDisplay } from '../../components/Rating';


class RatingPage extends Component {
  componentWillMount() {
    const { getRatingArticle, articleId } = this.props;
    getRatingArticle(articleId);
  }

  handleChange = (event) => {
    const { ratingData } = this.props;
    ratingData({ [event.target.name]: Number(event.target.value) });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { ratingArticle, ratingReducer, articleId } = this.props;
    ratingArticle(articleId, { ...ratingReducer.ratingPostData });
  }

  render() {
    const { ratingReducer } = this.props;
    return (
      <div>
        <div className="rateArticle">
          <div className="submitRate">
            <Rating
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </div>
          <div>
            {
              ratingReducer.rating
                ? <RatingDisplay article={ratingReducer} />
                : <span>Loading...</span>
          }
          </div>
        </div>
      </div>
    );
  }
}

RatingPage.propTypes = {
  getRatingArticle: PropTypes.func.isRequired,
  ratingArticle: PropTypes.func.isRequired,
  ratingData: PropTypes.func.isRequired,
  ratingReducer: PropTypes.shape({}).isRequired,
  articleId: PropTypes.number.isRequired,
};


const mapStateToProps = ({ ratingReducer }) => ({ ratingReducer });

export const mapDispatchToProps = dispatch => ({
  getRatingArticle: articleId => dispatch(fetchRatingThunk(articleId)),
  ratingArticle: (articleId, rate) => dispatch(postRating(articleId, rate)),
  ratingData: rate => dispatch(postRatingData(rate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingPage);
