import React from 'react';

const NotesContext = React.createContext({
  notes: [],
  addNote: () => {},
  deleteNote: () => {},
})

export default NotesContext;