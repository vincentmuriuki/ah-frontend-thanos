import { combineReducers } from 'redux';
import user from './userReducer';
import loginReducer from './loginReducer/loginReducer';
import articleReducer from './articleReducer';

const reducer = combineReducers({
  loginReducer,
  user,
  articleReducer,
});

export default reducer;
