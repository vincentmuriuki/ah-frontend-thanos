import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loginReducer from './loginReducer/loginReducer';
import articleReducer from './articleReducer';
import socialLoginReducer from './socialLoginReducer';
import profileReducer from './profileReducer';
import comments from './commentReducers';

const reducer = combineReducers({
  loginReducer,
  userReducer,
  articleReducer,
  socialLoginReducer,
  profileReducer,
  comments,
});

export default reducer;
