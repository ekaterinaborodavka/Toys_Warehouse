import {v4 as uuidv4} from 'uuid';

export const findItemInd = (toys, item) => {
  return toys.findIndex((el) => el.name === item.name && el.category.id === item.categoryId )
}

export const newItem = (toys, item, categoriesList) => {
  const category = categoriesList.filter((el) => el.name === item.category)
  let toyId = toys.length
  delete item.category;
  const newToy = {id: `${++toyId}`, categoryId: category[0].id , price: 100, totalCost: 100, ...item }
  return newToy
};

export const newTransaction = (transactions, item, username, type) => {
  let transId = transactions.length
  const newTrans = {id: `${++transId}`, date: new Date().toISOString(), userId: username, type: type, toys: [item] }
  return newTrans
};

export const createNewList = (toys, ind, newItem) => {
  return [
    ...toys.slice(0, ind),
    newItem,
    ...toys.slice(ind+1),
  ]
}

// export const removeCategory = (toys, categories, id) => {
//   const cat = categories.filter((e) => e.id === id)
//   const catItem = toys.filter((e) => e.category === cat[0].name)
//   if(catItem.length === 0 || catItem[0].quantity === 0){
//     return categories.filter((e) => e.id !== id)
//   }else{
//     alert('Категория не может быть удалена')
//     return categories
//   }
// };

// export const newItemCategory = (data) => {
//   return {
//     id: uuidv4(),
//     name: data,
//   };
// };

// export const addCategory = (categories, data) => {
//   return [...categories, newItemCategory(data)]
// };

// export const newItem = (item) => {
//     return {
//       id: uuidv4(),
//       ...item
//     };
// };

// export const createNewItem = (toys, ind, newItem) => {
//   return [
//     ...toys.slice(0, ind),
//     newItem,
//     ...toys.slice(ind+1),
//   ]
// }

// export const updateToysList = (toys, item) => {
//   const ind = findItemInd(toys, item)
//   const oldItem = toys[ind]
//   if (oldItem && oldItem.name === item.name && oldItem.category === item.category){
//     console.log(oldItem.category);
//     const newItem = { ...oldItem, quantity: Number(oldItem.quantity)+Number(item.quantity)}
//     return createNewItem(toys, ind, newItem)
//   }else {
//     return [...toys, newItem(item)]
//   }
// };

// export const buyItem = (toys, item) => {
//   const ind = findItemInd(toys, item)
//   const oldItem = toys[ind]
//   if(oldItem && oldItem.quantity-item.quantity < 0){
//     alert('Такого количества нет на складе')
//     return toys
//   }else if(oldItem && oldItem.name === item.name && oldItem.category === item.category ){
//     const newItem = { ...oldItem, quantity: oldItem.quantity-item.quantity}
//     return createNewItem(toys, ind, newItem)
//   } else {
//     alert('Товар отсутствует на складе')
//     return toys
//   }
// };
