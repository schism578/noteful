import React from 'react';
import Folder from '../folder/folder';

export default function FolderList(props) {
    const {
        id,
        name,
      } = props;

    return (
        <ul>
            <Folder
            key={id}
            name={name}
            folder={props.folder}
            />
        </ul>
  )
}