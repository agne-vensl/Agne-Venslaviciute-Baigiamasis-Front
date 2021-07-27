import React from 'react';
import ReactDOM from 'react-dom';
import './services/firebase';
import 'normalize.css';
import './index.css';
import App from './App';

import WebsocketProvider from './contexts/WebsocketContext';

ReactDOM.render(
  <React.StrictMode>
    <WebsocketProvider>
      <App />
    </WebsocketProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
