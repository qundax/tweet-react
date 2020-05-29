import React from 'react';
import ReactDOM from 'react-dom';

export default class User extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.user.profile_image_url_https} />
                <p>{this.props.user.name}</p>
                <p>{this.props.user.screen_name}</p>
                <p>{Date.now() - this.props.user.created_at}</p>
            </div>
        );
    }
}