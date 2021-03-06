import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../appContext';
import { withRouter } from "react-router";
//import { format } from 'date-fns';
import config from '../config';
import Store from '../store';
import './note.css';

class Note extends React.Component {
  static contextType = AppContext;

    handleClickDelete = e => {
      e.preventDefault()
      const noteId = this.props.note.id
      const { history } = this.props;

      fetch(`${Store.notes_API_ENDPOINT}/${this.props.note.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${config.API_TOKEN}`,
          'content-type': 'application/json'
        },
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
        })
        .then(() => {
            history.push('/')
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
            {() => (
            <div>
                <li key={id} className='Note'>
                    <NavLink to={`/notes/${id}`}>
                        <h3 className='note-name'>{name}</h3>
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
  note: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  modified: PropTypes.string
}

export default withRouter(Note);