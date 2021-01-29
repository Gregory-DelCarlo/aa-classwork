import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './app'

const Root = ({ store }) => (
    <Provider store={store}>
      <App />
    </Provider>
  );
  
  export default Root;