import {User} from './userReducer';
import {SET_USER, REMOVE_USER} from './userType';

export const setUser = (user: User) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
