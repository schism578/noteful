import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import Notes from '../notes/notes';
import Store from '../store';
import './folder.css';

export default class Folders extends Component {
    static defaultProps = {
        id: '',
        name: '',
        onClickMain: () => {},
    }

    render() {
        return (
            <div>
                <li key={Store.folder.id} className='folder-item'>                        
                    <NavLink 
                        to={`/folders/${Store.folders.id}`}
                            //onClick={}
                    >
                        <h3>{Store.folder.name}</h3>
                    </NavLink>
                </li>
                    <button 
                        type='button' onClick={(props) => props.onClickMain(props.id)}>Go Back</button>
            </div>
        )
    }
}

