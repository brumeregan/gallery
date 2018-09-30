import React, { Component } from 'react';
import './styles.css';

export default class Gallery extends Component {
    _selectPhoto = (photo) => {
        const { _selectPhoto, _openModalWindow } = this.props;
        _selectPhoto(photo);
        _openModalWindow();
    };

    render() {
        const { photos, mode,  } = this.props;
        const classes = mode === 'list' ? 'list' : 'gallery';

        const photosEl = photos.map((photo) => {
            return (
                <div key = { photo.id }
                     className = 'gallery__item'
                     onClick = { (event) => { this._selectPhoto(photo) } }>
                    <img src = { photo.webformatURL } alt = { photo.tags } />
                </div>
            )
        });

        return (
            <React.Fragment>
                <div className = { classes }>
                    { photosEl }
                </div>
            </React.Fragment>
        )
    }
}
