import React from 'react';
import { connect } from 'react-redux';
import { getViewSelectOpt } from '../../../actions';

class SelectForm extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        const {selectOption} = this.props;

        return (
            <div className='col-12 px-0 py-1 f_item'>
                <input type="button" value='Select Option' className='btn px-4' onClick={selectOption} />
            </div>
        );
    }
}

const mapDispatchToPropsSelectOpt = {
    selectOption: getViewSelectOpt
}

export default connect(null, mapDispatchToPropsSelectOpt)(SelectForm);
