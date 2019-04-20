import React from 'react';
import { connect } from 'react-redux';
import { getView } from '../actions';

class ListItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {value, getInpV} = this.props;

        return (
            <div className='col-12 px-0 py-1 f_item'>
                <input type="button" value={value} className='btn px-4' onClick={getInpV} />
            </div>
        );
    }
}

const mapDispatchToProps = {
    getInpV: getView,
};

export default connect(null,mapDispatchToProps)(ListItem);
