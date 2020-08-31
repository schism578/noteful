import React from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../appContext';
import Store from '../store';
import './note.css';

export default class Note extends React.Component {
  static contextType = AppContext;

    handleClickDelete = e => {
      e.preventDefault()
      const noteId = this.props.id
      console.log(noteId)

      fetch(`${Store.notes_API_ENDPOINT}/${noteId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          // return res.json()
        })
        .then(() => {
            this.context.deleteNote(noteId)
          // allow parent to perform extra behaviour
          // this.props.onDeleteNote(noteId)
        })
        .catch(error => {
          console.error({ error })
        })
    }

    render() {
      const { name, id, modified } = this.props
    return (
        <AppContext.Consumer>
            {(context) => (
            <div>
                <li key={id} className='Note'>
                    <NavLink to={`/notes/${id}`}>
                        <h3 className='note-title'>{name}</h3>
                    </NavLink>
                    <p className='mod-date'>{modified}</p>
                    <div className='Note-buttons'>
                    <button
                      className='Note__delete'
                      type='button'
                      onClick={this.handleClickDelete}
                    >
                            Delete
                        </button>
                    </div>
                </li>
            </div>
        )}
    </AppContext.Consumer>
    )
  }
} 