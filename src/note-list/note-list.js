import React from 'react';
import Note from '../note/note';
import Store from '../store';

export default function NoteList({ note }) {
  const filteredNotes = Store.folderId
  ? Store.notes.filter(note => note.folder_id === parseInt(Store.folderId))
  : Store.notes

const noteCards = filteredNotes.map(note => (
  <Note key={note.id} note={note} />
))

return <>{noteCards}</>
}

    NoteList.defaultProps = {
      notes: [],
    }