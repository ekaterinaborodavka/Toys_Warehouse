
export const findItemInd = (toys, item) => {
  return toys.findIndex((el) => {
    return (
      el.name.toLowerCase() === item.name.toLowerCase() &&
      el.category.id === item.categoryId
         )
        } );
};

export const findIndCat = (catList, item) => {
  return catList.findIndex((el) => {
    return (
      el.name.toLowerCase() === item.toLowerCase()
         )
        } );
};

export const newItem = (toys, item, categoriesList) => {
  const category = categoriesList.filter((el) => el.name === item.category);
  let toyId = toys.length;
  let newToy = {...item,
    id: `${++toyId}`,
    categoryId: category[0].id,
    price: 100,
    totalCost: 100,
    quantity: Number(item.quantity),
  };
  const description = toys.filter((el) => {
    return (
      el.name === item.name && el.categoryId === item.categoryId
    );
  });
  if (description.length > 0 ) {
    newToy = {
      ...newToy,
      description: description[0].description,
    };
    return newToy;
  } else {
    return newToy;
  }
};

export const newTransaction = (transactions,
    item, username, type,
    categoriesList, toysList) => {
  let transId = transactions.length;
  const category = categoriesList.filter((el) => el.id === item.categoryId);
  const id = toysList.filter((el) => {
    return (
      el.name === item.name && el.category.name === category[0].name
    );
  });
  delete item.categoryId;
  const newItem = {
    ...item,
    id: id[0].id,
    category: category,
  };
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
  const toysNameList = [];
  toys.map(({ name }) =>{
    return toysNameList.splice(0, 0, name);
  });
  const sortToys = toysNameList.sort();
  const newToysList = sortToys.filter((el, ind) => {
    return sortToys.indexOf(el) === ind;
  });
  const newToysListArr = newToysList.map((el) => {
    return { id: newToysList.indexOf(el), name: el };
  });
  return newToysListArr;
};

export const dispError = (dispatch, type, er) => {
  dispatch({
    type: type,
    subtype: 'failed',
    error: er,
  });
};

export const err = { message: 'Something went wrong' };
