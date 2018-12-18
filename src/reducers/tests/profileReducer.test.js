import expect from 'expect';
import profileReducer from '../profileReducer';
import actionTypes from '../../actions/actionTypes';

describe('test profile reducer', () => {
  const intialState = {};
  const payload = {
    token: 'CAGHBZYJBUgvyxsgtygk.bytwes.twTYUgjhxyfgxu',
    username: 'JohnDoe',
    bio: 'this is my bio',
    first_name: 'john',
    image: 'https://picsum.photos/200/200',
    last_name: 'doe',
    isLoggedIn: true,
  };
  test('Test Reducer Get profile successfully', () => {
    const action = {
      type: actionTypes.GET_PROFILE_SUCCESS,
      payload,
    };
    const expectedData = {
      ...intialState,
      profile: action.payload,
    };
    expect(profileReducer(intialState, action)).toEqual(expectedData);
  });
  test('Test Reducer Get profile successfully', () => {
    const action = {
      type: actionTypes.GET_PROFILE_ERROR,
      payload,
    };
    const expectedData = {
      ...intialState,
      profile: action.profile,
    };
    expect(profileReducer(intialState, action)).toEqual(expectedData);
  });
});
