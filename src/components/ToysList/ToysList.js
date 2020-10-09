import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import Loader from '../Loader/Loader';
import ToysListElement from '../ToysListElement/ToysListElement';
import CategoryToys from '../CategoryToys/CategoryToys';
import Navigation from '../Navigation/Navigation';
import * as toysActions from '../../Store/actions/toysAction';
import * as formActions from '../../Store/actions/formActions';

import './ToysList.css';

export default function ToysList() {
  const dispatch = useDispatch();
  const toys = useSelector((state) => state.toys.list, shallowEqual);
  const form = useSelector((state) => state.form, shallowEqual);
  const categories = useSelector((state) => state.categories.categoriesList,
      shallowEqual);
  const error = useSelector((state) => state.toys.error, shallowEqual);
  const isLoading = useSelector((state) => state.toys.loading,
      shallowEqual);

  const onFormSubmit = useCallback(
      (e) => {
        e.preventDefault();
        if (form.name && form.category) {
          dispatch(toysActions.addItem(form));
        } else {
          alert('Lead the category and name of the toy');
        }
      }, [dispatch, form],
  );

  const onInputComingChange = useCallback(
      ({ target }) => {
        dispatch(formActions.updateFormToy({
          [target.name]: target.value,
        }));
      }, [dispatch],
  );

  return (
    <div>
      {isLoading && <Loader />}
      <h1 className='Title'>Toys Warehouse</h1>
      <Navigation />
      <div className='ToysList_Title'>
        <div className='ToysList_Column_Title'>Name</div>
        <div className='ToysList_Column_Title'>Quantity</div>
        <div className='ToysList_Column_Title'>Description</div>
        <div className='ToysList_Column_Title'>Category</div>
      </div>
      {error && <div className='Wrong' >ERROR: {error}</div>}
      {Array.isArray(toys) && toys.map( (toy) => {
        return (
          <ToysListElement
            toy={ toy }
            key={ toy.id }
          />
        );
      })}
      <form className='Toys_List_Form' onSubmit={ onFormSubmit }>
        <div className='Form_Wrapper'>
          <CategoryToys
            categories={ categories }
            name='category'
            value={ form.category }
            onInputComingChange={ onInputComingChange }/>
          <input
            className='Name_Toys'
            name='name'
            placeholder='name'
            value={ form.name }
            onChange={ onInputComingChange }/>
          <input
            className='Description_Toys'
            name='description'
            placeholder='description'
            value={ form.description }
            onChange={ onInputComingChange }/>
        </div>
        <button className='Toys_List_button'>Add Toy</button>
      </form>
    </div>
  );
}
