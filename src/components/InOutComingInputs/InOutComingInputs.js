import React from 'react'

import CategoryToys from '../CategoryToys/CategoryToys'

import './InOutComingInputs.css'

export default function InOutComingInputs(props) {
    const { categories, toys, incoming, onInputComingChange } = props

    return (
        <div className='InOut_Coming_Inputs_Wrapper'>
            <CategoryToys 
                categories={ categories } 
                name={ 'category' }
                onInputComingChange={ onInputComingChange } />
            <CategoryToys 
                toys={ toys } 
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
    )
}
