import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import './ButtonBack.css'

export default function ButtonBack() {
    const history = useHistory();
    const goBack = useCallback(
        () => {
        history.push('toyslist');
        }, [history],
    );

    return (
        <button className='Back'
        onClick={ goBack }>Back</button>
    )
}
