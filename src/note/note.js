import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Note(props) {
        return (
            <div>
                <li key={props.id}
                    className='note-item'>
                    <NavLink 
                        to={'/note'}>
                        <h3>{props.name}</h3>
                    </NavLink>
                        Date modified on {props.modified}
                </li>
                <button
                    className='notes-id'
                    onClick={() => props.onClickDelete(props.id)}
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