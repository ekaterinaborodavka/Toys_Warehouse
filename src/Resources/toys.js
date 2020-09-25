import { get, authorized, create } from '../Services/networkProvider';

export const getList = async (list, token) => {
  const res = await get(list, token);
  return res
};

export const createItem = (item = {}, token) => {
  console.log(item);
  return create('toys', item, token);
};

export const createAuthorized = async (item = {}) => {
  return await authorized('login', item);
};