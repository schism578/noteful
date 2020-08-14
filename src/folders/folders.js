import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Store from '../store';

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
                                        <li key={folder.id}>
                                            
                                            <NavLink 
                                            to={'/folders'}
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

