import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <div style={{ backgroundColor: '#4A4E69', height: '100vh' }}>
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);