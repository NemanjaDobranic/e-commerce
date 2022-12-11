import {SET_AUTH, REMOVE_AUTH} from './authType';

export interface AuthAction {
  type: typeof SET_AUTH | typeof REMOVE_AUTH;
  payload: boolean;
}

const initialState = null;

const authReducer: (
  state: boolean | null | undefined,
  action: AuthAction,
) => boolean | null = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return true;
    case 'REMOVE_AUTH':
      return false;
    default:
      return state;
  }
};

export default authReducer;
