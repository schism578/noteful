import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../src/main/main';
import FoldersMain from '../src/extramain/FoldersMain';
import NotesMain from '../src/extramain/NotesMain';
import FoldersSidebar from '../src/sidebar/FoldersSidebar';
import NotesSidebar from '../src/sidebar/NotesSidebar';
import MainSidebar from '../src/sidebar/MainSidebar';
import Store from './store';
import './App.css';

class App extends Component {
  state = {
    folders: Store.folders,
    notes: Store.notes,
    error: null,
  }

  render() {
  return (
    <div className='App'>
      <header className='App-header'>
        <sidebar>
          <Route path='/' component={MainSidebar} />
          <Route path='/folders/:folders-id' 
            render={(routeProps) =>
              <FoldersSidebar
                aFolders={this.state.folders.find(folder => folder.id === routeProps.match.params.folderId)}
              />
            }
          />
          <Route path='/notes/folder-id' 
            render={(routeProps) =>
              <NotesSidebar
                aNotes={this.state.notes.find(note => note.id === routeProps.match.params.noteId)}
              />
            }
          />
        </sidebar>
        <main>
          <Route path='/' component={Main} />
          <Route path='/folders/:folder-id' 
            render={(routeProps) =>
              <FoldersMain
                aFolders={this.state.folders.find(folder => folder.id === routeProps.match.params.folderId)}
              />
            }
          />
          <Route path='/notes/notes-id' 
            render={(routeProps) =>
              <NotesMain
                aNotes={this.state.notes.find(note => note.id === routeProps.match.params.noteId)}
              />
            }
          />  
        </main>
      </header>
    </div>
  );
}
}

export default App;
