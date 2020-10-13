import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import AppContext from './appContext';
import FolderList from './folder-list/folder-list';
import NoteList from './note-list/note-list';
import NotePage from './note-page/note-page';
import FolderPage from './folder-page/folder-page';
import AddFolder from './add-folder/add-folder';
import AddNote from './add-note/add-note';
import ErrorBoundary from './error-boundary';
import config from './config';
import Store from './store';
import './App.css';

class App extends Component {
  state = {
    folders: [],
    notes: [],
    error: null,
    newFolder: {
      hasError: false,
      touched: false,
      name: '',
    },
    newNote: {
      name: {
        touched: false,
        value: '',
      },
      folder_id: {
        touched: false,
        value: '',
      },
      content: {
        touched: false,
        value: '',
      },
    },
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
        'Authorization': `Bearer ${config.API_KEY}`,
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
          'Authorization': `Bearer ${config.API_KEY}`,
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

  updateNewFolderName = name => {
    this.setState({
      newFolder: {
        hasError: false,
        touched: true,
        name: name,
      },
    })
  }

  updateNewNoteData = (input, value) => {
    this.setState({
      newNote: {
          ...this.state.newNote,
        [input]: {
          touched: true,
          value: value,
        },
      },
    })
  }

  handleAddFolder = newFolder => {
    this.setState({
      folders: [...this.state.folders, newFolder],
    })
  }

  handleAddNote = note => {
    this.setState({
      notes: [...this.state.notes, note],
    })
  }

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId),
    })
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      addFolder: this.handleAddFolder,
      newFolder: this.state.newFolder,
      updateNewFolderName: this.updateNewFolderName,
      newNote: this.state.newNote,
      handleAddNote: this.handleAddNote,
      updateNewNoteData: this.updateNewNoteData
    }
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
                        <Route exact path='/' component={() => <FolderList folders={this.state.folders} />} />
                        <Route
                            path='/folders/:folderId'
                            render={(routeProps) =>
                          <ErrorBoundary>
                            <FolderList
                                folders={this.state.folders}
                                aFolder={this.state.folders.find(folder => folder.id === routeProps.match.params.folderId)}
                            />
                          </ErrorBoundary>
                            }
                        />
                        <Route
                            path='/notes/:notesId'
                            render={(routeProps) =>
                          <ErrorBoundary>
                            <FolderPage
                                note={this.state.notes.find(note => note.id === routeProps.match.params.notesId)}
                                folder={this.state.folders.find(folder => folder.id === (this.state.notes.find(note => note.id === routeProps.match.params.notesId)).folderId) }
                            />
                          </ErrorBoundary>
                            }
                        />
                      </div>
                    <AppContext.Provider value={contextValue}>
                      <div className='note-list'>
                        <Route 
                            exact path='/' 
                            component={() => 
                            <ErrorBoundary>
                              <NoteList notes={this.state.notes} />
                           </ErrorBoundary>} 
                        />
                        <ErrorBoundary>
                          <Route path='/folders/:folderId' component={NoteList} />
                        </ErrorBoundary>
                        <ErrorBoundary>
                          <Route path="/add-folder" component={AddFolder} />
                        </ErrorBoundary>
                        <ErrorBoundary>
                          <Route path="/add-note" component={AddNote} />
                        </ErrorBoundary>
                        <Route 
                            path='/notes/:notesId'
                            render={(routeProps) =>
                            <ErrorBoundary>
                              <NotePage
                                note={this.state.notes.find(note => note.id === routeProps.match.params.notesId)}
                                {...routeProps} 
                              />
                            </ErrorBoundary>
                            }
                        />
                      </div>
                    </AppContext.Provider>
                </ul>
            </main>
        </div>
  );
}
}

export default App;