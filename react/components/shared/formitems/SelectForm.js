import React from 'react';
import { connect } from 'react-redux';

class SelectForm extends React.Component{
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        console.log(this.props)
    }


    render() {
        return (
            <div className='form-group'>
                <label>{this.props.data.label}</label>
                <select className="form-control" value={this.props.data.value}>
                    <option value=''>Select Option</option>
                    {this.props.data.options && this.props.data.options.map((el,key)=>(<option key={key} value={el}>{el}</option>))}
                </select>
            </div>
           
        );
    }
}

const mapDispatchToPropsSelectOpt = {

};

export default connect(null, mapDispatchToPropsSelectOpt)(SelectForm);
