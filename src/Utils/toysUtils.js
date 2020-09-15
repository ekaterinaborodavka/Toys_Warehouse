
export const getTotal = (goods) => {
  return goods.reduce((acc, item) => {
    return acc + parseFloat(item.weight);
  }, 0);
};

export const getTitleCategiry = (toys) => {
  const categoryTitleToys =toys
  categoryTitleToys.forEach(el => {
    delete el.description
    delete el.category
    delete el.weight
  });
  return categoryTitleToys
};

export const toggleCheckbox = (id, goods) => {
  return goods.map((item) => {
    if (item.id === id) {
      return {...item, active: !item.active};
    }
    return item;
  });
};


