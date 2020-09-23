import { get, authorized } from '../Services/networkProvider';

export const getToys = async (token) => {
  const res = await get('toys', token);
  return res
};


export const createAuthorized = (item = {}) => {
  return authorized('login', item);
};