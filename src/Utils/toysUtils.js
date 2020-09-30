
export const findItemInd = (toys, item) => {
  return toys.findIndex((el) => el.name === item.name &&
         el.category.id === item.categoryId );
};

export const newItem = (toys, item, categoriesList) => {
  const category = categoriesList.filter((el) => el.name === item.category);
  let toyId = toys.length;
  delete item.category;
  const newToy = {id: `${++toyId}`,
    categoryId: category[0].id,
    price: 100,
    totalCost: 100, 
    quantity: Number(item.quantity),
    ...item };
  return newToy;
};

export const newTransaction = (transactions, item, username, type) => {
  let transId = transactions.length;
  const newTrans = {id: `${++transId}`,
    date: new Date().toISOString(),
    userId: username,
    type: type,
    toys: [item] };
  return newTrans;
};

export const createNewList = (toys, ind, newItem) => {
  return [
    ...toys.slice(0, ind),
    newItem,
    ...toys.slice(ind+1),
  ];
};

export const createToysNameList = (toys) => {
  let toysNameList = []
  toys.map(({ name }) =>{
    toysNameList.splice(0,0,name)
  })
  const sortToys = toysNameList.sort()
  const newToysList = sortToys.filter((el, ind) => sortToys.indexOf(el) === ind)
  const newToysListArr = newToysList.map((el) => {
    return { id: newToysList.indexOf(el), name: el }
  })
  return newToysListArr
};