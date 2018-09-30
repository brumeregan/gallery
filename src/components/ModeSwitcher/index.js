import React, { Component } from 'react';
import './Styles.css';

export default class ModSwitcher extends Component {

    componentDidMount() {

    }

    _updateMode = (mode) => {
        const { _updateGalleryMode } = this.props;

        _updateGalleryMode(mode);
    };



    render() {
        const { mode } = this.props;

        return (
            <React.Fragment>
                <div className = 'ModeSwitcher' >
                    <button onClick = {() => this._updateMode('list') }
                            disabled = { mode === 'list' }>List</button>
                    <button onClick = {() => this._updateMode('gallery') }
                            disabled = { mode === 'gallery' }>Gallery</button>
                </div>
            </React.Fragment>
        )
    }
}
