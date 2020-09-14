import React from 'react'

import './ToysListElement.css'

export default function ToysListElement(props) {
    const { title, weight, description, category } = props.toy;

    return (
    <div className='ToysListElement'>
        <div className='ToysListElement_Column'>{ title }</div>
        <div className='ToysListElement_Column'>{ weight }</div>
        <div className='ToysListElement_Column'>{ description }</div>
        <div className='ToysListElement_Column'>{ category }</div>
    </div>
    )
}
