import {v4 as uuidv4} from 'uuid';

export const removeCategory = (categories, id) => {
  return categories.filter((e) => e.id !== id)
};

export const newItemCategory = (data) => {
  return {
    id: uuidv4(),
    name: data,
  };
};

export const addCategory = (categories, data) => {
  return [...categories, newItemCategory(data)]
};

export const newItem = (item) => {
  console.log(item);
  return {
    id: uuidv4(),
    ...item
  };
};

export const addNewItem = (toys, item) => {
  console.log(item);
  return [...toys, newItem(item)]
};
