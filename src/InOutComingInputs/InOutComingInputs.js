import React from 'react'

import CategoryToys from '../CategoryToys/CategoryToys'

import './InOutComingInputs.css'

export default function InOutComingInputs(props) {
    const { categories, toys, incoming } = props

    return (
        <div className='InOut_Coming_Inputs_Wrapper'>
            <CategoryToys categories={ categories } name={ 'category' } />
            <CategoryToys toys={ toys } name={ 'title' }/>
            <input 
                className='Quantity_Toys' 
                name='quantity' 
                placeholder='quantity' />
            {incoming ? <input 
                className='Description_Toys' 
                name='description' 
                placeholder='description' /> : null}
        </div>
    )
}
