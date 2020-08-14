import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../src/main/main';
import Store from './store';
import './App.css';

class App extends Component {
  state = {
    folders,
    notes,
    error: null,
  }

  render() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Sidebar>
          <Route path='/' component={MainSidebar} />
          <Route path='/folders/folders-id' 
            render={(routerProps) =>
              <FoldersSidebar
                aFolders={this.state.folders.find(folder => folder.id === routeProps.match.params.folderId)}
              />
            }
          />
          <Route path='/notes/folder-id' 
            render={(routerProps) =>
              <NotesSidebar
                aNotes={this.state.notes.find(note => note.id === routeProps.match.params.noteId)}
              />
            }
          />
        </Sidebar>
        <Main>
          <Route path='/' component={Main} />
          <Route path='/folders/folder-id' 
            render={(routerProps) =>
              <FoldersMain
                aFolders={this.state.folders.find(folder => folder.id === routeProps.match.params.folderId)}
              />
            }
          />
          <Route path='/notes/notes-id' 
            render={(routerProps) =>
              <NotesMain
                aNotes={this.state.notes.find(note => note.id === routeProps.match.params.noteId)}
              />
            }
          />  
        </Main>
      </header>
    </div>
  );
}
}

export default App;
