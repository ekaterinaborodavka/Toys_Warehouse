
export const findItemInd = (toys, item) => {
  return toys.findIndex((el) => el.name === item.name &&
         el.category.id === item.categoryId );
};

export const newItem = (toys, item, categoriesList) => {
  const category = categoriesList.filter((el) => el.name === item.category);
  let toyId = toys.length;
  console.log(item);
  const newToy = {...item,
    id: `${++toyId}`,
    categoryId: category[0].id,
    price: 100,
    totalCost: 100, 
    quantity: Number(item.quantity),
  };
  return newToy;
};

export const newTransaction = (transactions, item, username, type, categoriesList, toysList) => {
  let transId = transactions.length;
  const category = categoriesList.filter((el) => el.id === item.categoryId);
  const id = toysList.filter((el) => el.name === item.name && el.category.name === category[0].name);
  delete item.categoryId;
  const newItem = {
    ...item,
    id: id[0].id,
    category: category,
  }
  const newTrans = {id: `${++transId}`,
    date: new Date().toISOString(),
    userId: username,
    type: type,
    toys: [newItem] };
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
    return toysNameList.splice(0,0,name)
  })
  const sortToys = toysNameList.sort()
  const newToysList = sortToys.filter((el, ind) => sortToys.indexOf(el) === ind)
  const newToysListArr = newToysList.map((el) => {
    return { id: newToysList.indexOf(el), name: el }
  })
  return newToysListArr
};