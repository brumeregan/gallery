import React, { Component } from 'react';

export default class ModSwitcher extends Component {
    state = {
        mode: 'list'
    };

    _updateMode = (mode) => {
        const { _updateGalleryMode } = this.props;

        _updateGalleryMode(mode);
    };

    render() {
        const { mode } = this.state;

        return (
            <React.Fragment>
                <div>
                    <button onClick = {() => this._updateMode('list') }>List</button>
                    <button onClick = {() => this._updateMode('gallery') }>Gallery</button>
                </div>
            </React.Fragment>
        )
    }
}
