export const aFolder = (folders=[], folderId) => 
    folders.find(folder => folder.id === folderId);

export const aNote = (notes=[], noteId) =>
    notes.find(note => note.id === noteId)

export const notesForFolder = (notes=[], folderId) => (
    (!folderId)
      ? notes
      : notes.filter(note => note.folderId === folderId)
  )

export const noteCounter = (notes=[], folderId) =>
    notes.filter(note => note.folderId === folderId).length

//export const highlight = {aFolder && folder.id === aFolder.id}

