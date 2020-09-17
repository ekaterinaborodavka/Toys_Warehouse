import React, { useCallback, useState } from 'react'

import './TransactionList.css'

export default function TransactionList() {
    const [open, setOpen] = useState(false)

    const changeOpen = useCallback(
        () => {
           setOpen(!open)
        },[open]
    )

    return (
        <div className='Transaction_Item' onClick={ changeOpen }>
            transaction item
            <div className={ open ? 'Transaction_Item_Details_Open' : 'Transaction_Item_Details_Close' }>
                details
            </div>
        </div>
    )
}
