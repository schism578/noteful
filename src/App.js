import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
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
            <NavLink to={`/`}>
                    <h1>Noteful</h1>
                </NavLink>
            </header>
            <ul>
            <div>
                <Route exact path='/' component={() => <FolderList folders={store.folders} />} />
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
                <Route exact path='/' component={() => <NoteList notes={store.notes} />} />
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