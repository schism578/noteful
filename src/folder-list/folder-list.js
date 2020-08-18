import React from 'react';
import Folder from '../folder/folder';

export default function FolderList(props) {
    const {
        id,
        name,
      } = props;

    return (
      <ul>
      {props.folders.map(folder => (
            <Folder
            key={id}
            name={name}
            folder={folder}
            />
      ))
      }
      </ul>

  )
}