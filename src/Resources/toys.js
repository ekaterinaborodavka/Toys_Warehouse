import { get, authorized, create, remove } from '../Services/networkProvider';

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

export const removeCategory = (id, token) => {
  return remove('categories', id, token);
};

export const createCategory = (item = {}, token) => {
  return create('categories', item, token);
};
