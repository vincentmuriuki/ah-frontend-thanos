import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loginReducer from './loginReducer/loginReducer';
import articleReducer from './articleReducer';
import socialLoginReducer from './socialLoginReducer';
import followUnfollowReducer from './followUnfollowReducer';

const reducer = combineReducers({
  loginReducer,
  userReducer,
  articleReducer,
  socialLoginReducer,
  followUnfollowReducer,
});

export default reducer;
