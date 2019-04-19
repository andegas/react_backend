import React from 'react';
import { connect } from 'react-redux';
import { getViewTxtArea } from '../../../actions';

class TextareaForm extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {textArea} =  this.props;

        return (
            <div className='col-12 px-0 py-1 f_item'>
                <input type="button" value='Textarea' className='btn px-4' onClick={textArea} />
            </div>
        );
    }
}

const mapDispatchToPropsTxtArea = {
    textArea : getViewTxtArea
}

export default connect(null,mapDispatchToPropsTxtArea)(TextareaForm);
