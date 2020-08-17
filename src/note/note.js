import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Note({ note }) {
        return (
            <div>
                <li key={note.id}
                    className='note-item'>
                    <NavLink 
                        to={'/note'}>
                        <h3>{note.name}</h3>
                    </NavLink>
                        Date modified on {note.modified}
                </li>
                <button
                    className='notes-id'
                    onClick={() => note.onClickDelete(note.id)}
                >
                    Delete
                </button>
            </div>
                
        )
}

Note.defaultProps = {
    id: 0,
    name: '',
    modified: '',
    onClickDelete: () => {},
}