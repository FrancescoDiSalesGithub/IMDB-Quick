import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import TextField from './TextField';
import ImageMovie from './ImageMovie';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <TextField />
  </React.StrictMode>,
  document.getElementById('text')
);



ReactDOM.render(
  <React.StrictMode>
    <ImageMovie />
  </React.StrictMode>,
  document.getElementById('image-banner')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
