import React from 'react';
import Store from '../store';
import Context from '../appContext';
import PropTypes from 'prop-types';
import '../note-page/note-page.css';

export default class AddNote extends React.Component {
    static contextType = Context

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

    render () {
        return (
            <form className="registration" onSubmit={e => this.handleFormSubmit(e)}>
                <h2>Create a Note:
                {this.context.newNote.name.touched && <p>{this.validateName()}</p>}
                </h2>
                    <input type="text" className="note_name_input"
                    name="name" id="name" />
                <h2>Write the Note:</h2>
                    <input type="text" className="note_content_input"
                    name="content" id="content" />
                <label htmlFor="folders">Select a Folder:</label>
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
                        >
                        Save
                    </button>
                </div>
            </form>
        )
    }
}

AddNote.propTypes = {
    history: PropTypes.object
  }
