import React, { Component } from 'react';
import Folders from '../src/folders/folders';
import Notes from '../src/notes/notes';



export default class Main extends Component {


    render() {
        return (
            <div>
                <header>
                    <h1>Noteful
                        <a
                        href={'/'}
                        rel='noopener noreferrer'>
                        </a>
                    </h1>
                </header>
                    <main>
                    <sidebar>
                        <ul>
                            <li>
                                <Folders />
                            </li>
                        </ul>
                        <button 
                            type='button' 
                            onClick={() => this.props.onClickMain(this.props.id)}>Back</button>
                    </sidebar>

                        <section>
                            <Notes />
                        </section>
                    </main>
            </div>
        )
    }
}