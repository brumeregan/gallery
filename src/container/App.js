import React, { Component } from 'react';
import './App.css';
import { store } from '../redux-components/init/store';

import Search from '../components/Search';
import ModeSwitcher from '../components/ModeSwitcher';
import Gallery from '../components/Gallery';
import Modal from '../components/Modal';

const API_KEY = '2654390-274676d357e6d0775fd95c51f';
const API = `http://pixabay.com/api/?key=${API_KEY}`;


class App extends Component {
    state = {
        photos: [],
        searchText: '',
        mode: 'list',
        modal: false,
        selectedImage: {}
    };

    componentDidMount () {
        this._getPhotosAsync();
    };

    _getAPIUrl = (query, count = 8) => {
        return `${API}&q=${encodeURIComponent(query)}&image_type=photo&per_page=${count}`
    };

    _getPhotosAsync = (query = '') => {
        const url = this._getAPIUrl(query);

        fetch(url).then((res) => {
            return res.json();
        }).then((res) => {
            this.setState(() => ({
                photos: res.hits
            }));
        }).catch(err => console.log('err:' + err));

    };

    _updateGalleryMode = (newMode) => {
        this.setState({
            mode: newMode
        });
    };

    _search = (text) => {
        this._getPhotosAsync(text);
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
        this.setState(() => ({
            selectedImage: photo
        }));
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
