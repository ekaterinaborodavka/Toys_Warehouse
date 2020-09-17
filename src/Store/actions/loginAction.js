import { LOGIN } from '../types/types';

export const login = (login) => {
  return {
    type: LOGIN,
    payload: login
  };
};