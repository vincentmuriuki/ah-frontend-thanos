import expect from 'expect';
import commentReducer from './index';
import actionTypes from '../../actions/commentActions/actionTypes';

describe(' Testing Comment reducer', () => {
  const initialState = {
    getCommentData: {
      results: [],
    },
  };
  const FailResults = {
    results: 'Article Not Found',
  };
  const Inputdata = {
    comment_body: 'This is my new comment',
  };

  const actions = (action, data) => ({
    type: action,
    payload: data,
  });

  const testExpectedData = data => ({
    ...initialState,
    commentInput: data,
  });

  test('NEW_COMMENT_DATA action', () => {
    expect(commentReducer(initialState,
      actions(actionTypes.NEW_COMMENT_DATA, Inputdata)))
      .toEqual(testExpectedData(Inputdata));
  });

  test('GET_ALL_COMMENTS_SUCCESSFUL action', () => {
    const Commentsdata = {
      results: ['This is my new comment', 'Second Comment'],
    };
    const action = {
      type: actionTypes.GET_ALL_COMMENTS_SUCCESSFUL,
      payload: Commentsdata,
    };
    const expectedData = {
      ...initialState,
      getCommentData: action.payload,
    };
    expect(commentReducer(initialState, action)).toEqual(expectedData);
  });

  test('GET_ALL_COMMENTS_FAIL action', () => {
    const action = actions(actionTypes.GET_ALL_COMMENTS_FAIL, FailResults);
    const expectedData = {
      ...initialState,
      getCommentError: action.payload,
    };
    expect(commentReducer(initialState, action)).toEqual(expectedData);
  });

  test('POST_COMMENT_SUCCESSFUL action', () => {
    const data = {
      results: 'This is my comment',
    };
    const action = {
      type: actionTypes.POST_COMMENT_SUCCESSFUL,
      payload: data,
    };
    const expectedData = {
      ...initialState,
      commentInput: {},
      getCommentData: {
        ...initialState.getCommentData,
        results: initialState.getCommentData.results.concat(action.payload),
      },
    };
    expect(commentReducer(initialState, action)).toEqual(expectedData);
  });

  test('POST_COMMENT_FAIL action', () => {
    const expectedData = {
      ...initialState,
      postCommentError: FailResults,
    };
    expect(commentReducer(initialState,
      actions(actionTypes.POST_COMMENT_FAIL, FailResults)))
      .toEqual(expectedData);
  });
});
