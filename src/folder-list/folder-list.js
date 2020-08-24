import React from 'react';
import Folder from '../folder/folder';

export default function FolderList(props) {
  console.log(props)
    const {
        aFolder,
        folders,
      } = props;

    return (
      <ul>
        {folders.map(folder => (
              <Folder
              key={folder.id}
              name={folder.name}
              folder={folder}
              highlight={aFolder && folder.id === aFolder.id}
              />
        ))
        }
      </ul>

  )
}