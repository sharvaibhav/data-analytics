import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import configureStore from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Provider store={configureStore()}><App /> </Provider>, document.getElementById('root'));
