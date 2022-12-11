import {SET_USER, REMOVE_USER} from './userType';

export interface User {
  name: string | undefined;
  surname: string | undefined;
  email: string | undefined;
}

export interface UserAction {
  type: typeof SET_USER | typeof REMOVE_USER;
  payload?: User;
}

const initalState: User = {
  name: undefined,
  email: undefined,
  surname: undefined,
};

const userReducer: (state: User | undefined, action: UserAction) => User = (
  state = initalState,
  action,
) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...(action.payload as User),
      };

    case REMOVE_USER:
      const newState = state;
      Object.keys(newState).forEach(
        k => (newState[k as keyof User] = undefined),
      );
      return newState;
    default:
      return state;
  }
};

export default userReducer;
