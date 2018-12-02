import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import App from './view/app';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
