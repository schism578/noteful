import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import Notes from '../notes/notes';
import Store from '../store';
import './folders.css';

export default class Folders extends Component {
    static defaultProps = {
        id: '',
        name: '',
    }

    render() {
        return (
            <div>
                <main>
                    <div>
                        <ul>
                            <li>
                            {Store.folders.map(folder => 
                                        <li key={folder.id} className='folder-item'>
                                            
                                            <NavLink 
                                            to={`/folders/${folder.id}`}
                                            //onClick={}
                                            >
                                                <h3>{folder.name}</h3>
                                            </NavLink>
                                        </li>
                                    )}
                            </li>
                        </ul>
                        <button 
                                type='button' onClick={(props) => props.onClickMain(props.id)}>Go Back</button>
                        </div>

                </main>
            </div>
        )
    }
}

