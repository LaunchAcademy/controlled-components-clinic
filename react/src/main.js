import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App'

document.addEventListener('DOMContentLoaded', () => {
  // You probably haven't seen this before -- we're first checking that there is an element
  // with id = 'react' before we try to render our App there
  let reactElement = document.getElementById('react');

  if (reactElement) {
    ReactDOM.render(
       <App />,
      reactElement
    );
  }
})
