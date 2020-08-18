import React from 'react';
import Note from '../note/note';

export default function NoteList(props) {
  const {
    id,
    name,
  } = props;

return (
    <section className='note-list'>
        <li className='list-notes'>
                <Note
                key={id}
                name={name}
              />
        </li>
    </section>
)
}