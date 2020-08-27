import React from 'react';
//import { NavLink } from 'react-router-dom';
import Note from '../note/note';
import './note-page.css';

export default function NotePage(props) {
    const {
        note,
    } = props;

    return (
        <div>
            <div>
                <Note 
                    name={note.name}
                    note={note}/>
            </div>
                <p className='note-content'>{note.content}</p>
        </div>
    )
}