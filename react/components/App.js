import React from 'react';
import axios from 'axios';
import pickBy from 'lodash.pickby';
import UserList from './UserList';
import SearchBar from './SearchBar';

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
    setSearchTerm = (searchTerm)=>{
        this.setState({searchTerm});
    };
    render(){
        let {users, searchTerm} = this.state;
        const searchRE = new RegExp(searchTerm, 'i');debugger;
        if(searchTerm){
            users = pickBy(users, (value) => {
                return value.name.match(searchRE)
                    || value.email.match(searchRE);
            });
        }
        return (
            <div>
                <SearchBar
                    store={this.state.store}
                    doSearch={this.setSearchTerm}
                />
                <UserList
                    users={users}
                    points={this.state.points}
                    store={this.state.store}
                />
            </div>

        );
    }
}

export default App;