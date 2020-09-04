import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './folder-page.css';

export default function FolderPage(props) {
    const {
        folder,
    } = props;

    return (
        <div>
            <div>
                <li key={folder.id} className={`folder-item ${props.highlight} ? 'folder-highlight' : ''`}>
                    <NavLink to={`/folders/${folder.id}`}>
                        <h3 className='folder-title'>{folder.name}</h3>
                    </NavLink>
                </li>
            </div>
        </div>
    )
}

FolderPage.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
}