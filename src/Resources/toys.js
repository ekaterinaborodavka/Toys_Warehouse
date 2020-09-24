import { get, authorized } from '../Services/networkProvider';

export const getList = async (list, token) => {
  const res = await get(list, token);
  return res
};


export const createAuthorized = async (item = {}) => {
  return await authorized('login', item);
};