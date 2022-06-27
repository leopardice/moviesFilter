import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './App';
import { rootReducer } from '../redux/rootReducer';

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />,
);
