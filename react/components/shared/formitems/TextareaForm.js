import React from 'react';
import { connect } from 'react-redux';
import { getViewTxtArea } from '../../../actions';

class TextareaForm extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label>{this.props.data.label} </label>
                <textarea className='form-control' placeholder={this.props.data.placeholder}>{this.props.data.value}</textarea>
            </div>
        );
    }
}

const mapDispatchToPropsTxtArea = {
    textArea : getViewTxtArea
};

export default connect(null,mapDispatchToPropsTxtArea)(TextareaForm);
