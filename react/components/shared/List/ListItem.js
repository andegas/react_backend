import React from 'react';
import {connect} from 'react-redux';
import {selectElement} from '../../../actions';

class ListItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <input className='btn px-4' type='button' value={this.props.value} onClick={this.props.selectElement.bind(this, this.props.value)}/>
            </div>

        );
    }
}
const mapDispatchToProps = {
    selectElement: selectElement
};
export default connect(null,mapDispatchToProps)(ListItem);
