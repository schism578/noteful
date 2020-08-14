import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Folders from '../folders/folders';
import Notes from '../notes/notes';



export default class Main extends Component {


    render() {
        return (
            <div>
                <header>
                        <NavLink
                        to={'/'}
                        rel='noopener noreferrer'>
                            <h1>Noteful</h1>
                        </NavLink>
                </header>
                    <main>
                    <div>
                        <ul>
                            <li>
                                <Folders />
                            </li>
                        </ul>
                    </div>

                        <section>
                            <Notes />
                        </section>
                    </main>
            </div>
        )
    }
}