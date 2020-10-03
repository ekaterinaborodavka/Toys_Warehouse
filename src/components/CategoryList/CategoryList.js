import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import CategoryListElement from '../CategoryListElement/CategoryListElement';
import Loader from '../Loader/Loader';
import * as categoriesActions from '../../Store/actions/categoriesAction';

import './CategoryList.css';

export default function CategoryList() {
  const categories = useSelector((state) => state.categories.categoriesList,
      shallowEqual);
  const error = useSelector((state) => state.categories.error, shallowEqual);
  const isLoading = useSelector((state) => state.categories.loading,
      shallowEqual);
  const newCategory = useSelector((state) => state.categories.newCategory,
      shallowEqual);
  const dispatch = useDispatch();

  const deleteICategory = useCallback(
      (id) => {
        dispatch(categoriesActions.deleteCategory(id));
      }, [dispatch],
  );

  const onFormSubmit = useCallback(
      (e) => {
        e.preventDefault();
        dispatch(categoriesActions.addNewCategory(newCategory));
        dispatch(categoriesActions.updateFormCategory(''));
      }, [newCategory, dispatch],
  );

  const onCategoryChange = useCallback(
      ({ target }) => {
        dispatch(categoriesActions.updateFormCategory(target.value));
      }, [dispatch],
  );

  return (
    <React.Fragment>
      <h1 className='Title'>Toys Warehouse</h1>
      <h2 className='CategoryList_Title'>Categories</h2>
      {isLoading && <Loader />}
      {error && <div className='Wrong' >ERROR: {error}</div>}
      <div className='CategoryList'>
        {Array.isArray(categories) && categories.map( (cat) => {
          return (
            <CategoryListElement
              category={ cat }
              key={ cat.id }
              onDelete={ deleteICategory }
            />
          );
        })}
        <form className='CategoryList_Form' onSubmit={ onFormSubmit }>
          <input type='text'
            className='CategoryList_Form_Input'
            name='category'
            placeholder='New Category'
            value={ newCategory }
            onChange={ onCategoryChange }/>
          <button className='CategoryList_Button'>Add Category</button>
        </form>
      </div>
    </React.Fragment>
  );
}
