import swal from 'sweetalert2';
import ACTION_TYPE from '../../actions/actionTypes';
import swalMessages from '../../actions/swalAlerts';

const initalState = {
};

const ratingReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.GET_RATING_SUCCESS:
      return {
        ...state,
        rating: action.payload,
      };
    case ACTION_TYPE.POST_RATING_SUCCESS:
      swal({ ...swalMessages.RATING_SUCCESSFUL });
      return {
        ...state,
        ratingPost: action.payload,
      };

    case ACTION_TYPE.POST_RATING_FAILED:
      swal({ ...swalMessages.LOGIN_ERROR, text: action.payload });
      return { ...state, ratingPostFail: action.payload };

    case ACTION_TYPE.POST_RATING_DATA:
      return {
        ...state,
        ratingPostData: action.payload,
      };

    default:
      return state;
  }
};

export default ratingReducer;
