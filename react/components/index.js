import React from 'react';
import ReactDOM from 'react-dom';

import { data } from '../../data/data';
import App from './App';
import StateApi from '../StateApi';

const store = new StateApi(data);

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);
