import {SET_USER} from './userType';

export interface User {
  name: string | undefined;
  surname: string | undefined;
  email: string | undefined;
}

export interface UserAction {
  type: typeof SET_USER;
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

    default:
      return state;
  }
};

export default userReducer;
