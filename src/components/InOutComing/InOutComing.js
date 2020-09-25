import React, { useCallback, useState } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

// import CategoryToys from '../CategoryToys/CategoryToys'
import InOutComingInputs from '../InOutComingInputs/InOutComingInputs';
import * as formActions from '../../Store/actions/formActions';
import * as toysActions from '../../Store/actions/toysAction';

import './InOutComing.css'

export default function Incoming() {
    const toys = useSelector((state) => state.toys.list, shallowEqual);
    const form = useSelector((state) => state.form, shallowEqual);
    const categories = useSelector((state) => state.categories.categoriesList, shallowEqual);
    const incoming = useSelector((state) => state.toys.incoming, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();
    let [countInput, setCountInput] = useState(0)
    let arrInput = []

    const onAddInput = useCallback(
        (e) => {
         setCountInput(countInput++)
        }, [],
    );

    const onFormSubmit = useCallback(
        (e) => {
          e.preventDefault();
          if(incoming && form.name && form.category){
            dispatch(toysActions.addItem(form))
          }else if( form.name && form.category ){
            dispatch(toysActions.buyItem(toys, form))
          }else{
            alert('Ведите категорию и название игрушки')
          }
          history.push('/toyslist')
        }, [dispatch, form],
    );

    const onInputComingChange = useCallback(
        ({ target }) => {
        dispatch(formActions.updateFormToy({
            [target.name]: target.value
        }))
        }, [dispatch],
    );

    for (let i=0; i<countInput; i++){
        arrInput.push(<InOutComingInputs 
            categories={ categories }
            key = { uuidv4() }
            toys={ toys }
            incoming= { incoming }
            onInputComingChange={ onInputComingChange }/>)
    }

    return (
        <React.Fragment>
        <h1 className='Title'>Toys Warehouse</h1>
        <h2 className='InOutcoming_Title'>{ incoming? 'Incoming': 'Outcoming'}</h2>
        <div className='InOutcoming_container'>
            <form className='InOutcoming_form' onSubmit={ onFormSubmit }>
                <InOutComingInputs 
                    categories={ categories }
                    toys={ toys }
                    incoming= { incoming }
                    onInputComingChange={ onInputComingChange }/>
                    { arrInput }
                {/* <CategoryToys categories={ categories } name={ 'category' } />
                <CategoryToys toys={ toys } name={ 'title' }/>
                <input 
                    className='Quantity_Toys' 
                    name='quantity' 
                    placeholder='quantity' />
                {incoming ? <input 
                    className='Description_Toys' 
                    name='description' 
                    placeholder='description' /> : null} */}
                <div className='Form_buttons_container'>
                    <div>
                        <button type='button' className='Form_button_plus'
                            onClick={ onAddInput }>
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
