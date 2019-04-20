import React from 'react';
import {connect} from 'react-redux';


class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                type: 'text'
            }
        };
    }

    handleChange(event) {
        this.setState({data: Object.assign(this.state.data,{[event.target.name]: event.target.value})});
    }
    submitData(){

        console.log(this.state.data);
    }

    render() {
        return (
            <div>
                <div className='text-center'>Settings</div>
                <div className="form-group row">
                    <label htmlFor="label_inp" className="col-12 col-sm-3 col-form-label"> Label: </label>
                    <div className="col-12 col-sm-9">
                        <input type="text" className="form-control" id="label_inp" onChange={this.handleChange.bind(this)} placeholder="" name="label"/>
                    </div>
                </div>
                {this.props.type && <div className="form-group row">
                    <label htmlFor="type_inp" className="col-12 col-sm-3 col-form-label"> Type: </label>
                    <div className="col-12 col-sm-9">
                        <select name="type" value={this.state.type} onChange={this.handleChange.bind(this)} className="form-control" id="type_inp">
                            {
                                this.props.type.map((v) => {
                                    return (
                                        <>
                                            <option value={v} style={{textTransform: 'capitalize'}}> {v} </option>
                                        </>
                                    );

                                })
                            }
                        </select>
                    </div>
                </div>}
                <div className="form-group row">
                    <label htmlFor="name_inp" className="col-12 col-sm-3 col-form-label"> Name: </label>
                    <div className="col-12 col-sm-9">
                        <input type="text" className="form-control" id="name_inp" placeholder="" name="name" onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
                {this.state.data.type !== 'button' && this.state.data.type !== 'submit' &&
                <div className="form-group row">
                    <label htmlFor="plc_inp" className="col-12 col-sm-3 col-form-label"> Placeholder: </label>
                    <div className="col-12 col-sm-9">
                        <input type="text" className="form-control" id="plc_inp" placeholder="" name="placeholder" onChange={this.handleChange.bind(this)} />
                    </div>
                </div>
                }

                <div className='text-right'>
                    <input type="submit" value="Submit" className='btn btn-submit' onClick={this.submitData.bind(this)}/>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = {

};

export default connect(null,mapDispatchToProps)(Settings);