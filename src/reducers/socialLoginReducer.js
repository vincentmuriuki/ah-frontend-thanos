import ACTION_TYPE from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
};

const returnState = (state, action) => ({ ...state, data: action.payload });

const socialLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SOCIAL_LOGIN:
      localStorage.setItem('token', action.payload);
      localStorage.setItem('username', action.payload);
      window.location.replace('/');
      return returnState(state, action);
    case ACTION_TYPE.LOGIN:
      return returnState(state, action);
    default: return state;
  }
};
export default socialLoginReducer;
