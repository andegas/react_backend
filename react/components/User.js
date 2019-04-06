import React from 'react';
import PropTypes from 'prop-types';

import Point from './Point';

const User = (props) => {
    const {user, store} = props;
    const points = store.lookupPoints(user.id);
    return (
        <div>
            <div>{user.name} - {user.email}</div>
            {points && <div>
                <h4>Points:</h4>
                {Object.values(points).map(point =>
                    <Point
                        key={point.id}
                        point={point}
                    />
                )}
            </div>}
            <hr/>
        </div>

    );
};

User.propTypes = {
    users: PropTypes.shape({
        id: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    })
};

export default User;
