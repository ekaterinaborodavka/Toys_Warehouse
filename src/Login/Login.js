import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import * as loginActions from '../Store/actions/loginAction';

import './Login.css'

export default function Login() {
    const history = useHistory();
    const password = useSelector((state) => state.login.password, shallowEqual);
    const email = useSelector((state) => state.login.email, shallowEqual);
    const dispatch = useDispatch();

    const login = useCallback(
        () => {
            if(password === '1234567890'){
                history.push('/toyslist')
            }else{
                alert('password is incorrect')
            }
    }, [history, password]
    )

    const onInputChange = useCallback(
        ({ target }) => {
          dispatch(loginActions.login({
              [target.name] : target.value
          }));
        }, [dispatch],
    );

    return (
        <React.Fragment>
            <div className='filter'></div>
            <div className= 'login'>
            <div className='login-content'>
                <h3 className='login-title'>Login</h3>
                <div className='email'>
                    <p> Email: </p>
                    <input name='email'
                        placeholder='Email' 
                        type='email'
                        onChange={ onInputChange }/>
                </div>
                <div className='password'>
                    <p> Password: </p>
                    <input name='password'
                        placeholder='Password' 
                        type='password'
                        onChange={ onInputChange }/>
                </div>
                <button 
                    type='button' 
                    className='login_button'
                    onClick={ login } >Login</button>
            </div>
            </div>
        </React.Fragment>
    )
}
