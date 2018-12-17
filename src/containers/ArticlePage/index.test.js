import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ArticlePageConnected, { ArticlePage, mapDispatchToProps } from '.';
import { sampleArticle } from '../../commons/initialStates';

const testClickButton = (wrapper, buttonId, mockMethod) => {
  wrapper.find(buttonId).simulate('click');
  expect(mockMethod).toHaveBeenCalled();
};

describe('<ArticlePage />', () => {
  let props;
  let initialState;
  let wrapper;
  let mockStore;
  let likeDislikeArticleDispatch;
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    props = {
      match: { params: { articleId: sampleArticle.id } },
      likeDislikeArticleDispatch: jest.fn(),
      getArticleDispatch: jest.fn(),
      getLikeDislikeStatusDispatch: jest.fn(),
      article: sampleArticle,
    };
    initialState = { articleReducer: { article: sampleArticle } };
    mockStore = configureStore([thunk]);

    likeDislikeArticleDispatch = jest.fn();
    const {
      match, getArticleDispatch, getLikeDislikeStatusDispatch, article,
    } = props;
    wrapper = mount(
      <ArticlePage
        store={mockStore(initialState)}
        match={match}
        likeDislikeArticleDispatch={likeDislikeArticleDispatch}
        getArticleDispatch={getArticleDispatch}
        getLikeDislikeStatusDispatch={getLikeDislikeStatusDispatch}
        article={article}
      />,
    );
  });

  it('renders the container', () => {
    const { match } = props;
    wrapper = mount(<ArticlePageConnected store={mockStore(initialState)} match={match} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger handleLike method', () => {
    testClickButton(wrapper, 'button#bt-like', likeDislikeArticleDispatch);
  });

  it('should trigger handleDisLike method', () => {
    testClickButton(wrapper, 'button#bt-dislike', likeDislikeArticleDispatch);
  });

  it('should check for the presence of like/dislike dispatch', () => {
    mapDispatchToProps(dispatch).likeDislikeArticleDispatch({});
    expect(dispatch.mock.calls[0][0]).toBeDefined();
  });
});
