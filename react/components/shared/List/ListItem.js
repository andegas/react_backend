import React from 'react';
import {connect} from 'react-redux';
import {getElementData} from '../../../actions';

class ListItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <input className='btn px-4' type='button' value={this.props.value} onClick={this.props.getElementData.bind(this, this.props.value)}/>
            </div>

        );
    }
}
const mapDispatchToProps = {
    getElementData: getElementData
};
export default connect(null,mapDispatchToProps)(ListItem);
