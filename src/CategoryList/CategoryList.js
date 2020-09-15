import React, { useCallback } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import CategoryListElement from '../CategoryListElement/CategoryListElement'

import './CategoryList.css'

export default function CategoryList() {
    const categories = useSelector((state) => state.toys.categoriesList, shallowEqual);
    const dispatch = useDispatch();

    const onFormSubmit = useCallback(
        (e) => {
          e.preventDefault();
          console.log(e.target);
        }, [],
    );

    const onInputChange = useCallback(
        ({ target }) => {
            console.log(target.value);
        }, [],
    );

    return (
        <React.Fragment>
            <h1 className='Title'>Toys Warehouse</h1>
            <h2 className='CategoryList_Title'>Categoryes</h2>
            <div className='CategoryList'>
                {Array.isArray(categories) && categories.map( (cat) => {
                    return (
                    <CategoryListElement
                        category={ cat }
                        key={ cat.id }
                    />
                    );
                })}
                <form className='CategoryList_Form' onSubmit={ onFormSubmit }>
                <input type='text' 
                    className='CategoryList_Form_Input' 
                    name='category'
                    placeholder='New Category'
                    onChange={ onInputChange }/>
                    <button className='CategoryList_Button'>Add Category</button>
                </form>
            </div>
        </React.Fragment>
    )
}
