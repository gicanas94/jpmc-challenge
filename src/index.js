import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GlobalFonts, GlobalStyles } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
