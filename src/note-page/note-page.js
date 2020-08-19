import React from 'react';
import { NavLink } from 'react-router-dom';
//import FolderList from '../folder-list/folder-list';
//import Note from '../note/note';
import './note-page.css';

export default function NotePage(props) {
    const {
        note,
        id,
        folder,
    } = props;

    return (
        <div>
            <div>
                <li key={id} className={`folder-item ${props.highlight} ? 'folder-highlight' : ''`}>
                    <NavLink to={`/folders/${id}`}>
                        <h3 className='folder-title'>{folder.name}</h3>
                    </NavLink>
                </li>
            </div>
            <div>
                <li key={note.id} className='Note'>
                    <NavLink to={`/notes/${note.id}`}>
                        <h3 className='note-title'>{note.name}</h3>
                    </NavLink>
                    <p className='mod-date'>{note.modified}</p>
                </li>
            </div>
                <p className='note-content'>{note.content}</p>
        </div>
    )
}