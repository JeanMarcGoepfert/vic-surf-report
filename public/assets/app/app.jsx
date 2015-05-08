'use strict';

import './favicon.ico';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

import React from 'react';
import App from './components/App/App';

React.render(
  <App />,
  document.getElementById('app')
);
