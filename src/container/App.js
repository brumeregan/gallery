import React, { Component } from 'react';
import './App.css';
import { store } from '../redux-components/init/store';

import { Mock } from '../__Mock';


import Search from '../components/Search';
import ModeSwitcher from '../components/ModeSwitcher';
import Gallery from '../components/Gallery';
import Modal from '../components/Modal';

const API_KEY = '2654390-274676d357e6d0775fd95c51f';
const word = 'cat';

const API = `http://pixabay.com/api/?key=2654390-274676d357e6d0775fd95c51f&q=${encodeURIComponent(word)}&image_type=photo&per_page=8`;
//&q=' + word + '&image_type=photo&per_page=8


class App extends Component {
    state = {
        photos: [],
        searchText: '',
        mode: 'list',
        modal: false,
        selectedImage: {}
    };

    componentDidMount () {
        // console.log('store', store.getState());

        this._getPhotosAsync();
    };

    _getPhotosAsync = () => {
        // TODO make api call to pixabay
        const response = Mock;
        this.setState(() => ({
            photos: response.hits
        }));

    };

    _updateGallery = () => {
        // make call to server
    };

    _updateGalleryMode = (newMode) => {
        this.setState({
            mode: newMode
        });
    };

    _search = (text) => {
        console.log('App', text);
    };

    _toggleModalWindow = () => {
        this.setState(({ modal }) => ({
            modal: !modal
        }));
    };

    _openModalWindow = () => {
        this.setState(() => ({
            modal: true
        }));

    };

    _closeModalWindow = () => {
        this.setState(() => ({
            modal: false
        }))
    };

    _selectPhoto = (photo) => {
        this.setState(({ selectedImage }) => ({
            selectedImage: photo
        }));

        console.log('_selectPhoto', photo);
    };



  render() {
      const { modal } = this.state;

      const modalEl = modal
                      && <Modal { ...this.state }
                      _closeModalWindow = { this._closeModalWindow }/>;

    return (
        <React.Fragment>
            <Search _search = { this._search } />
            <ModeSwitcher _updateGalleryMode = { this._updateGalleryMode }/>
            <Gallery { ...this.state }
                     _openModalWindow = { this._openModalWindow }
                     _toggleModalWindow = { this._toggleModalWindow }
                     _selectPhoto = { this._selectPhoto }
            />
            { modalEl }
        </React.Fragment>
    );
  }
}

export default App;
