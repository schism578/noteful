import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import NotesContext from './NotesContext';
import FolderList from './folder-list/folder-list';
import NoteList from './note-list/note-list';
import NotePage from './note-page/note-page';
import FolderPage from './folder-page/folder-page';
import Store from './store';
import './App.css';

class App extends Component {
  state = {
    folders: [],
    notes: [],
    error: null,
  }

  setFolders = folders => {
    this.setState({
      folders,
      error: null,
    })
  }

  setNotes = notes => {
    this.setState({
      notes,
      error: null,
    })
  }

  deleteNote = noteId => {
    console.log(noteId)
    const newNotes = this.state.notes.filter(nt =>
      nt.id !== noteId
    )
    this.setState({
      notes: newNotes
    })
  }

  componentDidMount() {
    fetch(Store.folders_API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(data => this.setFolders(data))
      .catch(error => this.setState({ error }))
    
      fetch(Store.notes_API_ENDPOINT, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        }
      })
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          return res.json()
        })
        .then(data => this.setNotes(data))
        .catch(error => this.setState({ error }))
  }

  render() {
    const contextValue = {
        notes: this.state.notes,
        deleteNote: this.deleteNote,
      };
    //const { store } = this.state
    return (
        <div className='App'>
            <main>
                <header className='App-header'>
                    <NavLink to={`/`}>
                        <h1 className='App-title'>Noteful</h1>
                    </NavLink>
                </header>
                <ul>
                    <div className='folder-list'>
                        <Route 
                            exact path='/' 
                            component={() => <FolderList folders={this.state.folders} />} 
                        />
                        <Route
                            path='/folders/:folderId'
                            //component={FolderList}
                            render={(routeProps) =>
                            <FolderList
                                folders={this.state.folders}
                                aFolder={this.state.folders.find(folder => folder.id === routeProps.match.params.folderId)}
                            />
                            }
                        />
                        <Route
                            path='/notes/:notesId'
                            render={(routeProps) =>
                            <FolderPage
                                note={this.state.notes.find(note => note.id === routeProps.match.params.notesId)}
                                folder={this.state.folders.find(folder => folder.id === (this.notes.find(note => note.id === routeProps.match.params.notesId)).folderId) }
                            />
                            }
                        />
                    </div>
                <NotesContext.Provider value={contextValue}>
                    <div className='note-list'>
                        <Route 
                            exact path='/' 
                            component={() => <NoteList notes={this.state.notes} />} 
                        />
                        <Route
                            path='/folders/:folderId'
                            component={NoteList}
                            //render={(routeProps) =>
                            //<NoteList
                            //    notes={store.notes.filter(note => note.folderId === routeProps.match.params.folderId)}
                            ///>
                            //}
                        />
                        <Route 
                            path='/notes/:notesId'
                            render={(routeProps) =>
                            <NotePage
                                note={this.state.notes.find(note => note.id === routeProps.match.params.notesId)} 
                                />
                            }
                        />
                    </div>
                </NotesContext.Provider>
                </ul>
            </main>
        </div>
  );
}
}

export default App;