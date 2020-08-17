import React from 'react';
import { NavLink } from 'react-router-dom';
//import Notes from '../notes/notes';
import Store from '../store';
import './folder.css';

export default function Folder({ folder }) {
    const folders = [];

        return (
            <div>
                <li key={folder.id} className='folder-item'>                        
                    <NavLink 
                        to={`/folders/${folder.id}`}
                            //onClick={}
                    >
                        <h3>{folder.name}</h3>
                    </NavLink>
                </li>
                    <button 
                        type='button' onClick={(props) => props.onClickMain(folder.id)}>Go Back</button>
            </div>
        )
}

