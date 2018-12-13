// handle all actions pertaining to the user (login, registration, ...)
import swal from 'sweetalert2';
import actionTypes from '../actions/actionTypes';
import swalMessages from '../actions/swalAlerts';

const initialState = {
  freshUser: {
    password: '',
    email: '',
    username: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_INPUT:
      return {
        ...state,
        freshUser: action.payload,
      };
    case actionTypes.USER_REGISTER_SUCCESS:
      swal(swalMessages.REGISTRATION_SUCCESSFUL);
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.USER_REGISTER_FAIL:
      return {
        ...state,
        data: action.payload,
      };
    default: return state;
  }
};
export default userReducer;
