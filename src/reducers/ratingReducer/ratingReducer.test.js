import expect from 'expect';
import ratingReducer from './ratingReducer';
import ACTION_TYPE from '../../actions/actionTypes';

describe('Test Rating Reducer', () => {
  const initalState = {
  };
  const data1 = '3';
  const data2 = { rating: '3' };
  const action = (actionType, userData) => ({
    type: actionType,
    payload: userData,
  });
  const expectedData1 = {
    ratingPost: data2,
  };
  const expectedData2 = {
    ratingPostData: data2,
  };
  const expectedData3 = {
    ratingPostFail: data2,
  };
  const expectedData = { rating: '3' };
  test('test rating succesfully', () => {
    expect(ratingReducer(initalState, action(ACTION_TYPE.GET_RATING_SUCCESS,
      data1))).toEqual(expectedData);
  });

  test('test rating post succesfully', () => {
    expect(ratingReducer(initalState, action(ACTION_TYPE.POST_RATING_SUCCESS,
      data2))).toEqual(expectedData1);
  });

  test('test rating post failed', () => {
    expect(ratingReducer(initalState, action(ACTION_TYPE.POST_RATING_FAILED,
      data2))).toEqual(expectedData3);
  });

  test('test rating post data succesfully', () => {
    expect(ratingReducer(initalState, action(ACTION_TYPE.POST_RATING_DATA,
      data2))).toEqual(expectedData2);
  });
});
