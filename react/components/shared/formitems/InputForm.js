import React from 'react';
import { connect } from 'react-redux';

class InputForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
             <label>{this.props.data.label}</label>
             <input className="form-control" type={this.props.data.type} value={this.props.data.value} placeholder={this.props.data.placeholder}/>
            </div>
           
        );
    }
}

const mapDispatchToProps = {

};

export default connect(null,mapDispatchToProps)(InputForm);
