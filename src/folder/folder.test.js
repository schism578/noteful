import React from 'react';
import ReactDOM from 'react-dom';
import Folder from './folder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Folder />, div);
  ReactDOM.unmountComponentAtNode(div);
});