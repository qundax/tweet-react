import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'
import Tweet from 'tweet'

class App extends React.Component {
    render() {
        const tweetList = tweets.map(tweet => {
            return (
                <li><Tweet tweet={tweet} /></li>
                );
        });

        return (
            <div>
                <ul>
                    {tweetList}
                </ul>
            </div>
            );
    }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");