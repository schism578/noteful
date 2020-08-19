import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
//import Folder from './folder/folder';
import FolderList from './folder-list/folder-list';
import NoteList from './note-list/note-list';
import NotePage from './note-page/note-page';
import FolderPage from './folder-page/folder-page';
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
                    <h1 className='App-title'>Noteful</h1>
                </NavLink>
            </header>
            <ul>
            <div className='folder-list'>
                <Route exact path='/' component={() => <FolderList folders={store.folders} />} />
                <Route
                    path='/folders/:folderId'
                    render={(routeProps) =>
                    <FolderList
                        folders={store.folders}
                        aFolder={store.folders.find(folder => folder.id === routeProps.match.params.folderId)}
                    />
                    }
                />
                <Route
                    path='/notes/:notesId'
                    render={(routeProps) =>
                    <FolderPage
                        note={store.notes.find(note => note.id === routeProps.match.params.notesId)}
                        folder={store.folders.find(folder => folder.id === (store.notes.find(note => note.id === routeProps.match.params.notesId)).folderId) }
                        />
                    }
                />
            </div>
            <div className='note-list'>
                <Route exact path='/' component={() => <NoteList notes={store.notes} />} />
                <Route
                    path='/folders/:folderId'
                    render={(routeProps) =>
                    <NoteList
                        notes={store.notes.filter(note => note.folderId === routeProps.match.params.folderId)}
                    />
                    }
                />
                <Route 
                    path='/notes/:notesId'
                    render={(routeProps) =>
                    <NotePage
                        note={store.notes.find(note => note.id === routeProps.match.params.notesId)} 
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