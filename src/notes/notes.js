import React from 'react';
import { NavLink } from 'react-router-dom';
import Store from '../store';


export default function Notes() {
        return (
            <div>
                    <main>
                        <section>
                            <div>
                                <ul className='NoteList'>
                                    {Store.notes.map(note => 
                                        <li key={note.id}>
                                            
                                            <NavLink 
                                            to={'/notes'}>
                                                <h3>{note.name}</h3>
                                            </NavLink>
                                            Date modified on {note.modified}
                                        </li>
                                    )}
                                </ul>
                                {/* THIS IS FOR LATER
                                <button
                                    className='notes-id'
                                    onClick={() => props.onClickDelete(props.id)}
                                    >
                                    Delete
                                </button>*/}
                            </div>
                        </section>
                    </main>
            </div>
        )
}

Notes.defaultProps = {
    id: 0,
    name: '',
    modified: '',
    onClickMain: () => {},
}