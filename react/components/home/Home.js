import React from 'react';
import {connect} from 'react-redux';
import {setDataStore} from '../../actions';
import List from '../shared/List/List';
import Form from '../shared/Form';
import Result from '../shared/Result';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.listItems = ['a', 'b', 'c'];
    }

    render(){
        console.log(this.props);
        return (
            <div className="container-fluid">
                <p>Home screen</p>
                <div className="row">
                    <div className="col-md-4">
                        <List type='form_list' listItems={this.listItems}/>
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
