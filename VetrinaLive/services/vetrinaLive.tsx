import {HttpMethods} from '../hooks/useApi';
const {GET} = HttpMethods;

export const news = () => {
  return {
    path: '/news',
    options: {
      method: GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
};
