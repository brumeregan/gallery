import React, { Component } from 'react';


export default class Modal extends Component {


    _closeWindow = () => {
        const { _closeModalWindow } = this.props;
        _closeModalWindow();
    };

    render() {
        const { selectedImage } = this.props;
        const stylesButton = {
            border: 'none',
            background: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            float: 'right'
        };

        return (
            <div className = 'Modal'>
                <button
                    onClick = { this._closeWindow } style={stylesButton}>X</button>
                <img src = { selectedImage.largeImageURL } alt = { selectedImage.tags }/>
                <div>{ selectedImage.tags }</div>
            </div>
        )
    }
}