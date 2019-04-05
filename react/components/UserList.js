import React from 'react';

import User from './User';

const UserList = (props) => {
    return (
        <div>
            <h3>User:</h3>
            {Object.values(props.users).map(user =>
                <User
                    key={user.id}
                    user={user}
                    store={props.store}
                    actions = {props.userActions}
                />

            )}
        </div>
    );
};

export default UserList;
