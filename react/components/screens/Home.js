import React from 'react';
import {connect} from 'react-redux';
import {setDataStore} from '../../actions';
import List from '../List';
import Form from '../Form';
import Result from '../Result';


class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p>Home screen</p>
                <div className="row">
                    <div className="col-md-4">
                        <List type='form_list'/>
                    </div>
                    <div className="col-md-4">
                        <Form/>
                    </div>
                    <div className="col-md-4">
                        <Result/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{

    return {
        data: state.data.data
    };

};

export default connect(mapStateToProps,{setDataStore})(Home);
