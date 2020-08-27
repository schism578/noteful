import React from 'react';
import Store from '../store';
import Context from '../appContext'
import PropTypes from 'prop-types'
//import './AddNote.css'

export default class AddNote extends React.Component {
    static contextType = Context

    addNewNote = note => {
        note.modified = new Date(note.modified);

        fetch(`${Store.notes_API_ENDPOINT}/notes`, {
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
        folder_id: e.target.folders.value,
        modified: new Date(),
        }
        console.log(newNote);
        this.addNewNote(newNote)
        this.props.history.push('/');
    }

    render () {
        return (
            <form className="registration" onSubmit={e => this.handleSubmit(e)}>
                <h2>Create a Note:</h2>
                    <input type="text" className="note_name_input"
                    name="name" id="name" onChange={e => this.updateNewNoteData(e.target.name, e.target.value)}/>
                <h2>Write the Note:</h2>
                    <input type="text" className="note_content_input"
                    name="content" id="content" onChange={e => this.updateNewNoteData(e.target.name, e.target.value)}/>
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
