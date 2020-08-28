import React, { Component } from 'react';
import Store from '../store';
import Context from '../appContext';
//import './add-folder.css'
import PropTypes from 'prop-types'

export default class AddFolder extends Component {
  static contextType = Context;

    addFolder = (name) => {
        fetch(`${Store.folders_API_ENDPOINT}/`, {
            method: 'POST',
            headers: {
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
        const newFolder = event.target.name.value;
        this.addFolder(newFolder);
        this.props.history.goBack();
      }
    
      updateFolderName(e) {
        const newName = e.target.value;
          this.context.updateNewFolderName(newName);
      }

    render () {
        return (
            <form className="registration" onSubmit={e => this.handleSubmit(e)}>
                <h2>Create a Folder:</h2>
                    <input type="text" className="folder_name_input"
                    name="name" id="name" onChange={e => this.updateFolderName(e)}/>
                <div className="folder__button__group">
                    <button
                        type="submit"
                        className="folder__button"
                        >
                        Save
                    </button>
                </div>
            </form>
        )
    }
}

AddFolder.propTypes = {
    history: PropTypes.object
  }