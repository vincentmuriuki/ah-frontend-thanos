import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loginReducer from './loginReducer/loginReducer';
import articleReducer from './articleReducer';
import socialLoginReducer from './socialLoginReducer';

const reducer = combineReducers({
  loginReducer,
  userReducer,
  articleReducer,
  socialLoginReducer,
});

export default reducer;
