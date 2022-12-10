import {combineReducers} from 'redux';
import userReducer, {User} from './user/userReducer';

export interface IRootState {
  user: User;
}

const rootReducer = combineReducers<IRootState>({
  user: userReducer,
});

export default rootReducer;
