import ACTION_TYPE from '../../actions/actionTypes';

const initalState = {
  user_details: '',
  errorMessage: '',
  successMessage: '',
};

const loginReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user_details: action.payload.response,
        successMessage: action.payload.message,
        errorMessage: '',
      };
    case ACTION_TYPE.USER_LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage,
        user_details: '',
        successMessage: '',
      };

    default:
      return state;
  }
};

export default loginReducer;
