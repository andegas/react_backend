import React from 'react';
import {connect} from 'react-redux';
import {getListData} from '../../actions';
import List from '../shared/List/List';
import Form from '../shared/Form';
import Result from '../shared/Result';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            listItems: ['a']
        };
    }
    componentDidMount() {
        this.props.getListData('home');
    }


    render(){
        return (
            <div className="container-fluid">
                <p>Home screen</p>
                <div className="row">
                    <div className="col-md-4">
                        {this.props.listItems &&
                            <List type='form_list' listItems={this.props.listItems}/>
                        }
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
        listItems: state.data.listItems
    };

};
const mapDispatchToProps = {
    getListData : getListData
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
