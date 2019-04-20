import React from 'react';
import List from '../List';
import Form from '../Form';
import Result from '../Result';
import {getListData} from '../../actions';
import {connect} from 'react-redux';

class Home extends React.Component{
    componentDidMount() {
        this.props.getListData('home');

    }
    render(){
        const listItems = ['a', 'b', 'c'];
        return (
            <div className="container-fluid">
                <p>Home screen</p>
                <div className="row">
                    <div className="col-md-4">
                        <List type='form_list' listItems={listItems}/>
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

const mapDispatchToProps = {
    getListData : getListData
};

export default connect(null,mapDispatchToProps)(Home);