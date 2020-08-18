import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import FolderList from './folder-list/folder-list';
import NoteList from './note-list/note-list';
import Store from './store';
import './App.css';

class App extends Component {
  state = {
    store: Store,
  }

  render() {
    const { store } = this.state
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Noteful</h1>
            </header>
            <ul>
            <li>
                {store.folders.map(folder => (
                    <FolderList
                    folders={store.folders}
                    key={folder.id}
                    id={folder.id}
                    name={folder.name}
                    //notes={folder.folderId.map(id => store.notes[id])}
                    />
                )
                )
                }
            </li>
            <li>
                {store.notes.map(note => (
                    <NoteList
                    notes={store.notes}
                    key={note.id}
                    id={note.id}
                    name={note.name}
                    />
                )
                )
                }
            </li>
            </ul>
        </div>
  );
}
}

export default App;