import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FolderList from './folder-list/folder-list';
import FolderPage from './folder-page/folder-page';
import NoteList from './note-list/note-list';
import NotePage from './note-page/note-page';
import './App.css';

class App extends Component {
  state = {
    folders: [],
    notes: [],
  }

  render() {
    return (
        <div className='App'>
        <header className='App-header'>
            <div className='folder-route'>
            <Route path='/' component={FolderList} />
            <Route path='/folders/:folders-id' 
                render={(routeProps) =>
                <FolderList
                    aFolders={this.state.folders.find(folder => folder.id === routeProps.match.params.folderId)}
                />
                }
            />
            {/*<Route path='/folders/:folders-id' 
                render={(routeProps) =>
                <FolderPage
                    aNotes={this.state.notes.find(note => note.id === routeProps.match.params.noteId)}
                />
                }
            />*/}
            </div>
            <div className='note-route'>
            <Route path='/' component={NoteList} />
            <Route path='/notes/:note-id' 
                render={(routeProps) =>
                <NoteList
                    aFolders={this.state.folders.find(folder => folder.id === routeProps.match.params.folderId)}
                />
                }
            />
            <Route path='/notes/:note-id' 
                render={(routeProps) =>
                <NotePage
                    aNotes={this.state.notes.find(note => note.id === routeProps.match.params.noteId)}
                />
                }
            />  
            </div>
      </header>
    </div>
  );
}
}

export default App;