import expect from 'expect';
import loginReducer from './loginReducer';
import ACTION_TYPE from '../../actions/actionTypes';

const initalState = {
  user_details: '',
  errorMessage: '',
  successMessage: '',
};
describe('Test Login Reducer', () => {
  test('test user logged in succesfully', () => {
    const data = { response: 'judeinno@gmail.com', message: 'Your logged in' };
    const action = {
      type: ACTION_TYPE.USER_LOGIN_SUCCESS,
      payload: data,
    };
    const expectedData = {
      user_details: 'judeinno@gmail.com',
      errorMessage: '',
      successMessage: 'Your logged in',
    };
    expect(loginReducer(initalState, action)).toEqual(expectedData);
  });

  test('test user loggin unsuccessfull', () => {
    const action = {
      type: ACTION_TYPE.USER_LOGIN_FAILURE,
      errorMessage: 'Wrong password',
    };
    const expectedData = {
      user_details: '',
      errorMessage: 'Wrong password',
      successMessage: '',
    };
    expect(loginReducer(initalState, action)).toEqual(expectedData);
  });
});
