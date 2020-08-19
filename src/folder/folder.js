import React from 'react';
import { NavLink } from 'react-router-dom';
import './folder.css';

export default function Folder(props) {
    const {
        id,
        name,
    } = props.folder;

    return (
        <div>
            <li key={id} className={`folder-item ${props.highlight} ? 'folder-highlight'}`}>
                <NavLink to={`/folders/${id}`}>
                    <h3 className='folder-title'>{name}</h3>
                </NavLink>
            </li>
        </div>
  )
}