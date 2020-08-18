import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Note(props) {
    const {
        name, 
        id,
    } = props;

    return (
        <div>
            <li key={id} className='Note'>
                <NavLink to={`/notes/${id}`}>
                    <h3>{name}</h3>
                </NavLink>
        </li>
        </div>
  )
} 