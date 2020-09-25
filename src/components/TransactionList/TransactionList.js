import React, { useCallback, useState } from 'react'
import {v4 as uuidv4} from 'uuid';

import './TransactionList.css'

export default function TransactionList(props) {
    const { items, transaction: { type, date, userId } } = props
    console.log(items);
    const [open, setOpen] = useState(false)

    const changeOpen = useCallback(
        () => {
           setOpen(!open);
        },[open]
    )

    return (
        <div className='Transaction_Item' onClick={ changeOpen }>
           <span className={ type === 'incoming' ?  
                            'Incoming' : 'Outcoming'}>{ type } { date } { userId }</span>
                {Array.isArray(items) && items.map((item) => {
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
