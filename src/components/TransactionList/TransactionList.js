import React, { useCallback, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import './TransactionList.css'

export default function TransactionList(props) {
    const { items, transaction: { type, date, user } } = props
    const [open, setOpen] = useState(false)

    const changeOpen = useCallback(
        () => {
           setOpen(!open);
        },[open]
    )

    return (
        <div className='Transaction_Item' onClick={ changeOpen }>
           <span className={ type === 'incoming' ?  
                            'Incoming' : 'Outcoming'}>{ type } { date } { user }</span>
                { items.map((item) => {
                    return(
                        <div key={ uuidv4() }
                            className={ open ? 
                            'Transaction_Item_Details_Open' 
                            : 'Transaction_Item_Details_Close' }>
                           productId: {item.productId}, 
                           quantity: {item.quantity}
                        </div>
                    )
                }) }
        </div>
    )
}
