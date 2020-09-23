import { get, authorized } from '../Services/networkProvider';

export const getToys = async () => {
  const res = await get('toys');
  return res
};

export const getLogin = async () => {
  const res = await get('profile');
  console.log(res);
  return res
};

export const createAuthorized = (item = {}) => {
  return authorized('login', item);
};