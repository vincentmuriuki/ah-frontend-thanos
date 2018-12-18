import swal from 'sweetalert2';
import actionTypes from '../../actions/commentActions/actionTypes';

const initialState = {
  getCommentData: { results: [] },
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_COMMENT_DATA:
      return { ...state, commentInput: action.payload };
    case actionTypes.GET_ALL_COMMENTS_SUCCESSFUL:
      return { ...state, getCommentData: action.payload };
    case actionTypes.GET_ALL_COMMENTS_FAIL:
      return { ...state, getCommentError: action.payload };
    case actionTypes.POST_COMMENT_SUCCESSFUL:
      swal({ type: 'success', text: 'You have add a new comment' });
      return {
        ...state,
        getCommentData: {
          ...state.getCommentData,
          results: state.getCommentData.results.concat(action.payload),
        },
        commentInput: {},
      };
    case actionTypes.POST_COMMENT_FAIL:
      swal({ title: 'Oops...', text: action.payload.results.error });
      return { ...state, postCommentError: action.payload };
    default:
      return { ...state };
  }
};

export default commentReducer;
