import { combineReducers } from 'redux';
import user from './userReducer';
import article from './articleReducer';
import loginReducer from './loginReducer/loginReducer';

const reducer = combineReducers({
  loginReducer,
  user,
  article,
});

export default reducer;
