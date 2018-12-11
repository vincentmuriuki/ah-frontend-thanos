import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchArticlesThunk from '../../actions/articleActions';
import ArticleDisplay from '../../components/Articles';
import '../../components/Articles/Articles.scss';

export class Articles extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchArticlesThunk());
  }

  render() {
    const { data } = this.props;
    const { match } = this.props;
    return (
      <div className="articles-body">
        {match.path !== '/'
          ? data.articles.map(article => (<ArticleDisplay article={article} key={article.id} />
          ))
          : data.articles
            .slice(0, 4).map(article => (<ArticleDisplay article={article} key={article.id} />

            ))}
      </div>
    );
  }
}

Articles.propTypes = {
  data: PropTypes.shape({
    articles: PropTypes.array.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
export const mapStateToProps = state => ({ data: state.articleReducer });
export default connect(mapStateToProps)(Articles);
