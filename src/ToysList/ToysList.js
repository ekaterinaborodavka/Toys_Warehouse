import React  from 'react'
import { shallowEqual, useSelector } from 'react-redux';

import Loader from '../Loader/Loader';
import ToysListElement from '../ToysListElement/ToysListElement';

import './ToysList.css'

export default function ToysList() {
    const toys = useSelector((state) => state.toys.list, shallowEqual);
    const error = useSelector((state) => state.toys.error, shallowEqual);
    const isLoading = useSelector((state) => state.toys.loading,
        shallowEqual);

    return (
        <div>
            {isLoading && <Loader />}
            <h1 className='Title'>Toys Warehouse</h1>
            <div className='ToysList_Title'>
                <div className='ToysList_Column_Title'>Title</div>
                <div className='ToysList_Column_Title'>Quantity</div>
                <div className='ToysList_Column_Title'>Description</div>
                <div className='ToysList_Column_Title'>Category</div>
            </div>
            {Array.isArray(toys) && toys.map( (toy) => {
            return (
            <ToysListElement
                toy={ toy }
                key={ toy.id }
            />
            );
            })}
            {error && <div className='Wrong' >ERROR: {error}</div>}
            <div className='ToysList_Button'>
                <button className='Incoming_Button'>Incoming</button>
                <button className='Outcoming_Button'>Outcoming</button>
                <button className='About_Button'>About</button>
                <button className='Transactions_Button'>Transactions</button>
            </div>
        </div>
    )
}
