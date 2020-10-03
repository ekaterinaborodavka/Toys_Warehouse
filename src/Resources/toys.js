import { get,
  authorized,
  create,
  remove,
  updateMerg } from '../Services/networkProvider';

export const getList = async (list, token) => {
  const res = await get(list, token);
  return res;
};

export const createItem = (item = {}, token) => {
  return create('toys', item, token);
};

export const removeItem = (id, token) => {
  return remove('toys', id, token);
};

export const createTransaction= (item = {}, token) => {
  return create('transactions', item, token);
};

export const updateMergItem = (id, item = {}, token) => {
  return updateMerg('toys', id, item, token);
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
