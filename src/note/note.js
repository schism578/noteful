import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../appContext';
import Store from '../store';
import './note.css';

export default class Note extends React.Component {
  static contextType = AppContext;

    handleClickDelete = e => {
      e.preventDefault()
      const noteId = this.props.note.id

      fetch(`${Store.notes_API_ENDPOINT}/${this.props.note.id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
        })
        .then(() => {
            this.props.history.push('/')
            this.context.deleteNote(noteId)
        })
        .catch(error => {
          console.error({ error })
        })
    }

    render() {
      const { name, id, modified } = this.props.note
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

Note.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}