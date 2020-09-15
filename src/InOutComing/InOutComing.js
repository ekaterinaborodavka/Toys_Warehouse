import React, { useCallback, useEffect } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import CategoryToys from '../CategoryToys/CategoryToys'
import { categories } from '../Utils/CategotyToys';
import { getTitleCategiry } from '../Utils/toysUtils'
import * as toysActions from '../Store/actions/toysAction';

import './InOutComing.css'

export default function Incoming() {
    const titleCategiry = useSelector((state) => state.toys.titleCategiry, shallowEqual);
    const toys = useSelector((state) => state.toys.list, shallowEqual);
    const incoming = useSelector((state) => state.toys.incoming, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        const categoryTitleArr = getTitleCategiry(toys)
        dispatch(toysActions.getTitleCategory(categoryTitleArr));
    }, [toys, dispatch]);

    const onFormSubmit = useCallback(
        (e) => {
          e.preventDefault();
          console.log(e.target);
        }, [],
    );

    return (
        <React.Fragment>
        <h1 className='Title'>Toys Warehouse</h1>
        <h2 className='InOutcoming_Title'>{ incoming? 'Incoming': 'Outcoming'}</h2>
        <div className='InOutcoming_container'>
            <form className='InOutcoming_form' onSubmit={ onFormSubmit }>
                <CategoryToys categories={ categories } name={ 'category' } />
                <CategoryToys titleCategiry={ titleCategiry } name={ 'title' }/>
                <input 
                    className='Quantity_Toys' 
                    name='quantity' 
                    placeholder='quantity' />
                {incoming ? <input 
                    className='Description_Toys' 
                    name='description' 
                    placeholder='description' /> : null}
                <div className='Form_buttons_container'>
                    <div>
                        <button type='button' className='Form_button_plus'>
                            <i className='fa fa-plus-square-o'></i>
                        </button>
                    </div>
                    <div>
                        {incoming ? 
                            <button className='Form_button'>Add</button> 
                            : <button className='Form_button'>Buy</button>}
                    </div>
                </div>
            </form>
        </div>
        </React.Fragment>
    )
}
