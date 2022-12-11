import {combineReducers} from 'redux';
import userReducer, {User} from './user/userReducer';
import authReducer from './auth/authReducer';

export interface IRootState {
  user: User;
  auth: boolean | null;
}

const rootReducer = combineReducers<IRootState>({
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;
