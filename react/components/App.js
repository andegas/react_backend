import React from 'react';
import axios from 'axios';

import UserList from './UserList';

import StateApi from '../StateApi';

class App extends React.Component{
    state = {
        users: {},
        points: {}
    };
    async componentDidMount() {
        const resp = await axios.get('/data');
        const store = new StateApi(resp.data);
        this.setState(() => {
            return {
                users: store.getUsers(),
                points: store.getPoints(),
                store: store
            };
        });
    }

    // userActions= {
    //     lookupPoints: userId => {
    //         return this.state.points.filter(point => point.userId == userId);
    //     },
    // }
    render(){
        return (
            <UserList
                users={this.state.users}
                points={this.state.points}
                store={this.state.store}
            />
        );
    }
}

export default App;