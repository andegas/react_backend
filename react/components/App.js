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
            store: api.getState()
        };
    }

    render() {
        return (
            <UserList
                users={this.state.users}
                store={this.props.store}
            />
        );
    }
}

export default App;