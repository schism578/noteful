import React, { Component } from 'react';
import Notes from '../src/notes/notes';


export default class Folders extends Component {


    render() {
        return (
            <div>
                <header>
                    <h1>Noteful
                        <a
                        href={/main}
                        rel='noopener noreferrer'>
                        </a>
                    </h1>
                </header>
                    <main>
                    <sidebar>
                            <ul>
                                <li>
                                    {/*FOLDERS, CURRENT FOLDER HIGHLIGHTED*/}
                                </li>
                            </ul>
                            <button 
                                type='button' onClick={() => props.onClickMain(props.id)}>Back</button>
                        </sidebar>
                    </main>
            </div>
        )
    }
}

