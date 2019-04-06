import React from 'react';

import User from './User';

const UserList = (props) => {
    const {users, store} = props;
    return (
        <div>
            <h3>User:</h3>
            {Object.values(users).map(user =>
                <User
                    key={user.id}
                    user={user}
                    store={store}
                />

            )}
        </div>
    );
};


export default UserList;
