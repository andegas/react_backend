import React from 'react';
import { connect } from 'react-redux';

class SelectForm extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <label>{this.props.label}
                <select value={this.props.value}>
                    <option value=''>Select Option</option>
                    {this.props.options.map((el,key)=>(<option key={key} value="el.value">{el.name}</option>))}
                </select>
            </label>
        );
    }
}

const mapDispatchToPropsSelectOpt = {

};

export default connect(null, mapDispatchToPropsSelectOpt)(SelectForm);
