import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Paul"/>
            <CommentDetail author="John"/>
            <CommentDetail author="Jenny"/>
            <CommentDetail author="Jessica Peligro"/>
            <CommentDetail author="Arthur"/>
            <CommentDetail author="Aurora"/>
            <CommentDetail author="Alpha"/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));


