import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
console.log(process.env.REACT_APP_BLAH);

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
