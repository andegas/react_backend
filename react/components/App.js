import React from 'react';
import UserList from './UserList';

import { data } from '../../data/data';
import StateApi from '../StateApi';

const api = new StateApi(data);

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            users: api.getUsers(),
            points: api.getPoints()
        };
    }
    userActions= {
        lookupPoints: userId => {
            return api.getPoints().filter(point => point.userId == userId);
        },
    }
    render(){
        return (
            <UserList
                users={this.state.users}
                points={this.state.points}
                userActions={this.userActions}
            />
        );
    }
}

export default App;