import {SET_AUTH, REMOVE_AUTH} from './authType';

export const setAuth = () => {
  return {
    type: SET_AUTH,
  };
};

export const removeAuth = () => {
  return {
    type: REMOVE_AUTH,
  };
};
