import React from 'react';
import {Link} from 'react-router-dom';
import List from '../List';
import Form from '../Form';
import Settings from '../Settings';

class Create extends React.Component {
    render() {
        return (
            <div>
                <p>Create</p>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <List type='element_list'/>
                        </div>
                        <div className="col-md-4">
                            <Form/>
                        </div>
                        <div className="col-md-4">
                            <Settings/>
                        </div>
                    </div>
                </div>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default Create;