import React from 'react';
import PropTypes from 'prop-types';
import Note from '../note/note';
import './note-page.css';

export default function NotePage(props) {
    const {
        note,
        history,
    } = props;

    return (
        <div>
            <div>
                <Note 
                    name={note.name}
                    note={note}
                    history={history}/>
            </div>
                <p className='note-content'>{note.content}</p>
        </div>
    )
}

NotePage.propTypes = {
    history: PropTypes.object,
    note: PropTypes.object
}