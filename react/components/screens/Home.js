import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return (
            <div>
                <p>Home</p>
                <Link to="/create">Create</Link>
            </div>
        );
    }
}

export default Home;