import React from 'react';
import { Link } from 'react-router-dom';

class Create extends React.Component{
    render(){
        return (
            <div>
                <p>Create</p>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default Create;