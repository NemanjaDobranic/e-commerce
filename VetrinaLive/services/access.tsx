import {HttpMethods} from '../hooks/useApi';
const {POST} = HttpMethods;

export const createAccount = (
  name: string,
  surname: string,
  email: string,
  password: string,
) => {
  return {
    path: '/users',
    options: {
      method: POST,
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        password: password,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
};
