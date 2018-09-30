import React, { Component } from 'react';

export default class Search extends Component {

    state = {
        text: '',
    };

    _searchUpdate = (event) => {
       this.setState({
           text: event.target.value
       })

    };

    _submitOnEnter = (event) => {
        const enterKey = event.key === 'Enter';

        if(enterKey) {
            this._submitText();
        }
    };

    _submitText = () => {
       const { text } = this.state;
       const { _search } = this.props;

       if(!text) return null;
        _search(text);

        this.setState({
            text: ''
        });
    };

    _handlerForSubmit = (event) => {
        event.preventDefault();
        this._submitText();
    };

    render() {
       const { text } = this.state;

       return (
           <React.Fragment>
               <form onSubmit = { this._handlerForSubmit }>
                   <input type = "text"
                          value = { text }
                          onChange = { this._searchUpdate }
                          onKeyPress = { this._submitOnEnter }
                   />

                   <button>Search</button>
               </form>
            </React.Fragment>
       )
    }
}
