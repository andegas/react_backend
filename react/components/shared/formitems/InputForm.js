import React from 'react';
import { connect } from 'react-redux';

class InputForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label>{this.props.label}
                <input type={this.props.type} value={this.props.value} placeholder={this.props.placeholder}/>
            </label>
        );
    }
}

const mapDispatchToProps = {

};

export default connect(null,mapDispatchToProps)(InputForm);
