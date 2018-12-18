import swal from 'sweetalert2';
import ACTION_TYPE from '../../actions/actionTypes';
import swalMessages from '../../actions/swalAlerts';

const initalState = {
  user_details: '',
  errorMessage: '',
  successMessage: '',
};


const loginReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.USER_LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.response.token);
      localStorage.setItem('username', action.payload.response.username);
      swal({ ...swalMessages.LOGIN_SUCCESSFUL, text: `You're logged in as ${action.payload.response.username}` });
      window.location.replace('/');
      return {
        ...state,
        user_details: action.payload.response,
        successMessage: action.payload.message,
        errorMessage: '',
      };
    case ACTION_TYPE.USER_LOGIN_FAILURE:
      swal({ ...swalMessages.LOGIN_ERROR, text: action.errorMessage });
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
