import React from 'react'

import './CategoryListElement.css'

export default function CategoryListElement(props) {
    const { name } = props.category
    return (
        <div className='CategoryListElement'>
            <div className='CategoryListElement_Column'>{ name }</div>
            <button className='CategoryListElement_Button'>Delete</button>
        </div>
    )
}
