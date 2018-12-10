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
    case actionTypes.USER_REGISTER_FAIL: {
      const errors = action.payload;
      swal({
        ...swalMessages.REGISTRATION_ERROR,
        text: (errors.username ? errors.username[0] : errors.email[0]),
      });
      return {
        ...state,
        data: action.payload,
      };
    }
    default: return state;
  }
};
export default userReducer;
