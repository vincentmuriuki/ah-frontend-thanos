import { combineReducers } from 'redux';
import userReducer from './userReducer';
import articleReducer from './articleReducer';
import loginReducer from './loginReducer/loginReducer';

const reducer = combineReducers({
  loginReducer,
  userReducer,
  articleReducer,
});

export default reducer;
