import React from 'react';
import ReactDOM from 'react-dom';

import UrlEntity from 'url-entity';

export default class Entities extends React.Component {
    render() {
        return (
            <div>
                <UrlEntity urls={this.props.urls} />
            </div>
        );
    }
}