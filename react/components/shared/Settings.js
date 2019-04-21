import React from 'react';
import {connect} from 'react-redux';
import {keepDataInForm} from '../../actions/index'


class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: this.props.element,
            data: {}
        };
    }

    handleChange(event) {
        this.setState({data: Object.assign(this.state.data,{[event.target.name]: event.target.value})});
    }
    handleOptionInput(event){
        this.option = event.target.value;
    }
    addOptions(){
        this.setState(state=>{
            if(!state.data.options) state.data.options = []; 
            return state.data.options = [...state.data.options, this.option];
        });
    }
    submitData(){
        this.props.keepDataInForm({tagName: this.props.elementSelected.tagName,data:this.state.data});
    }
    render() {
        return (
            <div>
                {this.props.elementSelected?
                    <form>
                        <div className='text-center'>Settings</div>
                        <div className="form-group row">
                            <label htmlFor="label_inp" className="col-12 col-sm-3 col-form-label"> Label: </label>
                            <div className="col-12 col-sm-9">
                                <input type="text" className="form-control" id="label_inp" onChange={this.handleChange.bind(this)} placeholder="" name="label"/>
                            </div>
                        </div>
                        {this.props.elementSelected.type && <div className="form-group row">
                            <label htmlFor="type_inp" className="col-12 col-sm-3 col-form-label"> Type: </label>
                            <div className="col-12 col-sm-9">
                                <select name="type" value={this.state.data.type} onChange={this.handleChange.bind(this)} className="form-control" id="type_inp">
                                    {
                                        this.props.elementSelected.type.map((v,i) => {
                                            return (
                                                <option key={i} value={v} style={{textTransform: 'capitalize'}}> {v} </option>
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
                        {this.props.elementSelected.tagName !== 'select' && this.state.data.type !== 'button' && this.state.data.type !== 'submit' &&
                        <div className="form-group row">
                            <label htmlFor="plc_inp" className="col-12 col-sm-3 col-form-label"> Placeholder: </label>
                            <div className="col-12 col-sm-9">
                                <input type="text" className="form-control" id="plc_inp" placeholder="" name="placeholder" onChange={this.handleChange.bind(this)} />
                            </div>
                        </div>
                        }
                        {this.props.elementSelected.tagName === 'select' &&
                        <div className="form-group row">
                            <label htmlFor="plc_inp" className="col-12 col-sm-3 col-form-label"> Options: </label>
                            <div className="col-12 col-sm-9 input-group">
                                <div className='col-12'>
                                    {this.state.data.options && this.state.data.options.map((el,i)=> <p key={i}>{el}</p>)}
                                </div>
                                <input className='form-control' type="text" placeholder="Option name" name="option" onChange={this.handleOptionInput.bind(this)}/>
                                <div className="input-group-append">
                                    <span className="input-group-text plus_icon pointer" onClick={this.addOptions.bind(this)}>+</span>
                                </div>
                            </div>
                        </div>}

                        <div className='text-right'>
                            <input type="button" value="Submit" className='btn btn-submit' onClick={this.submitData.bind(this)}/>
                        </div>
                    </form>
                    :<div className='text-center'> <h3>Select Element</h3></div>
                }

            </div>
        );
    }
}
const mapDispatchToProps = {
    keepDataInForm: keepDataInForm
};
const mapStoreToProps = (state) => ({
    elementSelected: state.data.elementSelected,
});

export default connect(mapStoreToProps,mapDispatchToProps)(Settings);