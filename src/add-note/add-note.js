import React from 'react';
import Store from '../store';
import AppContext from '../appContext';
import PropTypes from 'prop-types';
import ValidationError from '../ValidationError';
import '../note-page/note-page.css';

export default class AddNote extends React.Component {
    static contextType = AppContext

    addNewNote = note => {
        note.modified = new Date(note.modified);

        fetch(`${Store.notes_API_ENDPOINT}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
        })
        .then(res => {
            console.log(JSON.stringify(note))
            return res.json()
        })
        .then(resJSON => this.context.handleAddNote(resJSON))
    }

    parseFolders = () => {
        return this.context.folders.map(folder => (
        <option key={folder.id} name={folder.id} value={folder.id}>
            {folder.name}
        </option>
        ))
    }

    handleFormSubmit = e => {
        e.preventDefault(e)
        const newNote = {
        name: e.target.name.value,
        content: e.target.content.value,
        folderId: e.target.folders.value,
        modified: new Date(),
        }
        console.log(newNote);
        this.addNewNote(newNote)
        this.props.history.push('/');
    }

    validateName = () => {
        if (this.context.newNote.name.value.length === 0) {
          return 'Name is required'
        }
      }

    validateContent = () => {
        if (this.context.newNote.content.value.length === 0) {
          return 'Content is required'
        }
      }

    render () {
        return (
            <>
                <header>
                    <h2 className="add-note-header">Add A New Note:</h2>
                </header>
                    <form
                    className="add-note-form"
                    onSubmit={e => this.handleFormSubmit(e)}
                    >
                        <label htmlFor="name">
                            Name: 
                            {this.context.newNote.name.touched && (
                                <ValidationError message={this.validateName} />
                            )}
                        </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                aria-label="Name"
                                onChange={e =>
                                this.context.updateNewNoteData(e.target.name, e.target.value)
                                }
                                required
                            />
                        <label>
                            Write the Note: 
                            {this.context.newNote.content.touched && (
                                <ValidationError message={this.validateContent} />
                            )}
                        </label>
                            <input 
                                type="text"
                                name="content"
                                id="content"
                                aria-label="Description"
                                onChange={e =>
                                this.context.updateNewNoteData(e.target.name, e.target.value)
                                } 
                                required
                            />
                        <label htmlFor="folders">Select a Folder: </label>
                            <select
                                name="folders"
                                id="folders"
                                aria-required="true"
                                aria-label="Select a Folder"
                            >
                                {this.parseFolders()}
                            </select>
                        <div className="note__button__group">
                            <button
                                type="submit"
                                className="note__button"
                                disabled={this.validateName()}
                            >
                            Save
                            </button>
                        </div>
                    </form>
            </>
        )
    }
}

AddNote.propTypes = {
    history: PropTypes.object,
    //name: PropTypes.string.isRequired,
    //content: PropTypes.string.isRequired,
  }
