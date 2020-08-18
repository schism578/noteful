import React from 'react';
import Note from '../note/note';

export default function NoteList(props) {
  const {
    notes,
  } = props;

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