import React from 'react';
import Note from '../note/note';

export default function NoteList(props) {
  const {
    id,
    name,
  } = props;

return (
  <ul>
    {props.notes.map(note => (
          <Note
          key={id}
          name={name}
          note={note}
          />
      )
    )
  }
  </ul>
)
}