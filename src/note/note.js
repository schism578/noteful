import React from 'react';
import { NavLink } from 'react-router-dom';
import './note.css';

export default function Note(props) {
    const {
        id,
        name,
        modified,
    } = props.note;

    return (
        <div>
            <li key={id} className='Note'>
                <NavLink to={`/notes/${id}`}>
                    <h3 className='note-title'>{name}</h3>
                </NavLink>
                <p className='mod-date'>{modified}</p>
            </li>
        </div>
  )
} 