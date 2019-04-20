import React from 'react';
import { connect } from 'react-redux';
import { getViewTxtArea } from '../../../actions';

class TextareaForm extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label>{this.props.label}
                <textarea placeholder={this.props.placeholder}>{this.props.value}</textarea>
            </label>
        );
    }
}

const mapDispatchToPropsTxtArea = {
    textArea : getViewTxtArea
};

export default connect(null,mapDispatchToPropsTxtArea)(TextareaForm);
