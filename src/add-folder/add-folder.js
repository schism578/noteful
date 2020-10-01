import React, { Component } from 'react';
import Store from '../store';
import AppContext from '../appContext';
import PropTypes from 'prop-types';
import ValidationError from '../ValidationError';
import './add-folder.css';


export default class AddFolder extends Component {
  static contextType = AppContext;

  addFolder = (name) => {
    fetch(`${Store.folders_API_ENDPOINT}/`, {
        method: 'POST',
        headers: {
          "Authorization": "Bearer 1a4d99a8-154c-406d-808c-f016b7501225",
          'content-type': 'application/json',
        },
        body: JSON.stringify({name})
      }
    )
    .then(resp => resp.json())
    .then(data => this.context.addFolder(data))
  }

  handleSubmit(event) {
    event.preventDefault();
    const newFolder = event.target.newFolder.value;
    this.addFolder(newFolder);
    this.props.history.goBack();
  }

  updateFolderName(e) {
    const newName = e.target.value;
      this.context.updateNewFolderName(newName);
  }

  validateFolderName() {
    if (this.context.newFolder.name.trim() === 0) {
      return 'Must be more than 0 characters.'
    } else if ( this.context.newFolder.name.trim().length <= 3 ) {
      return 'Must be more than 3 characters.'
    }
  }

  render() {
    return(
      <>
        <header>
          <h2 className='add-folder-header'>Add A New Folder:</h2>
        </header>
        <form className="add-folder-form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="newFolder">
            Name:
            {this.context.newFolder.touched && (
            <ValidationError message={this.validateFolderName()} />
            )}  
          </label>
            <input
              type="text"
              name="newFolder"
              id="newFolder"
              aria-label="Name"
              onChange={(e) => this.updateFolderName(e)}
              required
            />
          <button type="submit">
          Submit
          </button>
        </form>
      </>
    )
  }
}

AddFolder.propTypes = {
  history: PropTypes.object
}