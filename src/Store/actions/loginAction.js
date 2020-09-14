import { LOGIN } from '../types/types';

export const login = (password) => {
  return {
    type: LOGIN,
    password,
  };
};