import React from 'react';
import ReactDOM from 'react-dom';
import FolderPage from './folder-page';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FolderPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});