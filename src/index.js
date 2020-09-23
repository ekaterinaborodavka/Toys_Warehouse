import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App/App';
import { store } from './Store';
import { initWithEndpoint} from './Services/networkProvider';

initWithEndpoint('http://localhost:8080');

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

