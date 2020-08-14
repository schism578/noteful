import React, { Component } from 'react';


export default function Notes(props) {
    static defaultProps = {
        id,
        name,
        modified,
        content,
        onClickMain: () => {},
    }

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
                                    {/*FOLDER OF CURRENTLY SELECTED NOTE*/}
                                </li>
                            </ul>
                            <button 
                                type='button' onClick={() => props.onClickMain(props.id)}>Back</button>
                        </sidebar>

                        <section>
                            <div>
                                <h2>
                                    <a href={props.name} />
                                </h2>
                                <span>{props.modified}</span>
                                {/* THIS IS FOR LATER
                                <button
                                    className='notes-id'
                                    onClick={() => props.onClickDelete(props.id)}
                                    >
                                    Delete
                                </button>*/}
                            </div>
                            <p>{props.content}</p>
                        </section>
                    </main>
            </div>
        )
    }
}