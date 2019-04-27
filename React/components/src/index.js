import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you Sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard >
                <CommentDetail
                    author="Paul"
                    timeAgo="Today at 4:45PM"
                    post="Hey There!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail
                    author="John"
                    timeAgo="Today ata 2:00AM"
                    post="Just passing by"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jenny"
                    timeAgo="Today at 5: 00PM"
                    post="Nice Blog"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jessica"
                    timeAgo="Today at 11:55PM"
                    post="Nice Day"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Arthur"
                    timeAgo="Today at 3:45PM"
                    post="Hi!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Aurora"
                    timeAgo="Today at 9:15PM"
                    post="How are you?"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alpha"
                    timeAgo="Today at 3:45PM"
                    post="I like your blog"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));


