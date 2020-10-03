import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CategoryToys from '../CategoryToys/CategoryToys';
import * as formActions from '../../Store/actions/formActions';
import * as toysActions from '../../Store/actions/toysAction';
import { createToysNameList } from '../../Utils/toysUtils'

import './InOutComing.css';

export default function Incoming() {
  const toys = useSelector((state) => state.toys.list, shallowEqual);
  const form = useSelector((state) => state.form, shallowEqual);
  const categories = useSelector((state) => state.categories.categoriesList,
      shallowEqual);
  const incoming = useSelector((state) => state.toys.incoming, shallowEqual);
  const dispatch = useDispatch();
  const history = useHistory();

  const newToysListCategory = createToysNameList(toys)

  const onFormSubmit = useCallback(
      (e) => {
        e.preventDefault();
        if (incoming && form.name && form.category) {
          dispatch(toysActions.addItem(form));
        } else if ( form.name && form.category ) {
          dispatch(toysActions.buyItem(form));
        } else {
          alert('Lead the category and name of the toy');
        }
        history.push('/toyslist');
      }, [dispatch, form, history, incoming],
  );

  const onInputComingChange = useCallback(
      ({ target }) => {
        dispatch(formActions.updateFormToy({
          [target.name]: target.value,
        }));
      }, [dispatch],
  );

  return (
    <React.Fragment>
      <h1 className='Title'>Toys Warehouse</h1>
      <h2 className='InOutcoming_Title'>
        { incoming? 'Incoming': 'Outcoming'}
      </h2>
      <div className='InOutcoming_container'>
        <form className='InOutcoming_form' onSubmit={ onFormSubmit }>
          <div className='InOut_Coming_Inputs_Wrapper'>
            <CategoryToys
              categories={ categories }
              name={ 'category' }
              onInputComingChange={ onInputComingChange } />
            <CategoryToys
              toys={ newToysListCategory }
              name={ 'name' }
              onInputComingChange={ onInputComingChange }/>
            <input
              required
              className='Quantity_Toys'
              name='quantity'
              placeholder='quantity'
              type='number'
              onChange={ onInputComingChange } />
            {incoming ? <input
              className='Description_Toys'
              name='description'
              placeholder='description'
              onChange={ onInputComingChange } /> : null}
          </div>
          <div className='Form_buttons_container'>
            <div>
              {incoming ?
                            <button className='Form_button'>Add</button> :
                            <button className='Form_button'>Buy</button>}
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
