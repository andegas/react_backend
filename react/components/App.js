import React from 'react';
import axios from 'axios';

import UserList from './UserList';

import StateApi from '../StateApi';
// import { data } from '../../data/data';
// const api = new StateApi(data);

class App extends React.Component{
    state = {
        users: {},
        points: {}
    };
    async componentDidMount() {
        const resp = await axios.get('/data');
        const api = new StateApi(resp.data);
        this.setState(() => {
            return {
                users: api.getUsers(),
                points: api.getPoints()
            };
        });
    }
    // constructor(){
    //     super();
    //     this.state = {
    //         users: api.getUsers(),
    //         points: api.getPoints()
    //     };
    // }
    userActions= {
        lookupPoints: userId => {
            return this.state.points.filter(point => point.userId == userId);
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