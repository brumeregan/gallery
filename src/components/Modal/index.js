import React, { Component } from 'react';

export default class Modal extends Component {

    _closeWindow = () => {
        const { _closeModalWindow } = this.props;
        _closeModalWindow();
    };

    render() {
        const { selectedImage } = this.props;

        return (
            <div>
                <button
                    onClick = { this._closeWindow }>Close</button>
                <img src = { selectedImage.largeImageURL } alt = { selectedImage.tags }/>
                <div>{ selectedImage.tags }</div>
            </div>
        )
    }
}