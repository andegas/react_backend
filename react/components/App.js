import React from 'react';
// import DataApi from '../DataApi';
// import {data} from '../data';
// import UsersList from './UsersList';
// import axios from 'axios';

// const api = new DataApi(data);

class App extends React.Component{
    state = {
        users:{},
        points:{},
    };

    // async componentDidMount() {
        // const resp = await axios.get('/data');
        // const api = new DataApi(resp.data);

        // this.setState(() => ({
        //     users: api.getUsers(),
        //     points: api.getPoints()
        // }));
    // }
    render() {
        return (
            <div>App</div>
        );
    }
}

export default App;