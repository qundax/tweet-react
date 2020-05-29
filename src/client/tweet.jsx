import React from 'react';
import ReactDOM from 'react-dom';

import User from 'user';
import Entities from 'entities';

export default class Tweet extends React.Component {
    render() {
        return (
            <div>
                <User user={this.props.tweet.user} />
                <Entities entities={this.props.tweet.entities} />
            </div>
        );
    }
}