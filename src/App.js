import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
            <div>
                <Route path='/' component={() => <FolderList folders={store.folders} />} />
                <Route
                    path='/folder/:folderId'
                    render={(routeProps) =>
                    <FolderList
                        aFolder={this.state.folders.find(folder => folder.id === routeProps.match.params.folderId)}
                    />
                    }
                />
            </div>
            <div>
                <Route path='/' component={() => <NoteList notes={store.notes} />} />
                <Route
                    path='/folder/:folderId'
                    render={(routeProps) =>
                    <NoteList
                        aNote={this.state.notes.find(note => note.id === routeProps.match.params.noteId)}
                    />
                    }
                />
            </div>
            </ul>
        </div>
  );
}
}

export default App;