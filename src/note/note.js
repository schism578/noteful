import React from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../appContext';
import Store from '../store';
import './note.css';

export default function Note(props) {
    const {
        id,
        name,
        modified,
    } = props.note;

    function deleteNoteRequest(noteId, cb) {
        fetch(Store.notes_API_ENDPOINT + `/${noteId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
          }
        })
          .then(res => {
            if (!res.ok) {
              // get the error message from the response,
              return res.json().then(error => {
                // then throw it
                throw error
              })
            }
            return res.json()
          })
          .then(data => {
            console.log({ data })
            cb(noteId)
          })
          .catch(error => {
            console.log(error)
          })
      }  

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
                            className='Note-description'
                            onClick={() => {
                                deleteNoteRequest(
                                props.id,
                                context.deleteNote,
                                )
                            }}
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