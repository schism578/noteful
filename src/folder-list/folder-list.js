import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Folder from '../folder/folder';
import NavButton from '../nav-button/nav-button';

export default function FolderList(props) {
    const {
        aFolder,
        folders,
      } = props;

    return (
      <div>
      <ul>
        {folders.map(folder => (
              <Folder
              key={folder.id}
              name={folder.name}
              folder={folder}
              highlight={aFolder && folder.id === aFolder.id}
              />
            )
          )
        }
      </ul>
      <div className='FolderList__button-wrapper'>
      <NavButton
        tag={NavLink}
        to='/add-folder'
        type='button'
        className='FolderList__add-folder-button'
      >
        <br />
        Add Folder
      </NavButton>
      </div>
    </div>
  )
}

FolderList.propTypes = {
  history: PropTypes.object
}