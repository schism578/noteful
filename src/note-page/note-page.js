import React from 'react';
//import { NavLink } from 'react-router-dom';
import FolderList from '../folder-list/folder-list';
import Note from '../note/note';

export default function NotePage(props) {
    const {
        note,
    } = props;

    return (
        <div>
            <FolderList />
            <Note />
            {note.content}
        </div>
    )
}