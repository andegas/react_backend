import React from 'react';


// const dateDisplay = (dateString) =>
//     new Date(dateString).toDateString();

const User = (props) => {
    const {user} = props;
    // const author = store.lookupAuthor(article.authorId);
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
    );
};

export default User;
