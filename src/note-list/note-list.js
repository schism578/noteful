import React from 'react';
import NotesContext from '../NotesContext';
import Note from '../note/note';

export default class NoteList extends React.Component {
  static contextType = NotesContext;
  static defaultProps = {
    notes: []
  };

  render() {
    const { notes } = this.context
    return (
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
    )
  }
}