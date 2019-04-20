import React from 'react';
import {connect} from 'react-redux';
import {setDataStore} from '../../actions';


class FormItem extends React.Component {
    constructor(props) {
        super(props);
    }

    selectForm(id){
        console.log(id);
    }
    render() {
        return (
            <div>
                <a href="javascript:" onClick={this.selectForm.bind(this, this.props.item.id)}>{this.props.item.name}</a>

            </div>
        );
    }
}
const mapStateToProps = state =>{

    return {
        data: state.data.data
    };

};
export default connect(mapStateToProps,{setDataStore})(FormItem);