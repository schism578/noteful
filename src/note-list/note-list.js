import React from 'react';
import AppContext from '../appContext';
import { NavLink } from 'react-router-dom';
import Note from '../note/note';
import NavButton from '../nav-button/nav-button';

export default class NoteList extends React.Component {
  static contextType = AppContext;
  static defaultProps = {
    notes: []
  };

  render() {
    const { notes } = this.context
    return (
      <div>
        <ul>
          {notes.map(note => (
                <Note
                key={note.id}
                name={note.name}
                note={note}
                />
            )
          )
        }
        </ul>
        <div className='NoteList__button-container'>
        <NavButton
          tag={NavLink}
          to='/add-note'
          type='button'
          className='NoteList__add-note-button'
        >
          <br />
          Add Note
        </NavButton>
      </div>
    </div>
    )
  }
}