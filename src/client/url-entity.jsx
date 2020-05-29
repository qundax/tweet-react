import React from 'react';
import ReactDOM from 'react-dom';

export default class UrlEntity extends React.Component {
    render() {
        const urls = this.props.urls.map(urlEntity => {
            return (
                <a href={urlEntity.url}><p>{urlEntity.display_url}</p></a>
                )
        })

        return (
            <div>
                {urls}
            </div>
        );
    }
}