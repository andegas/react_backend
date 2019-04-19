import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ViewFormSettings extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            type: 'text'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });

        e.preventDefault();
    }

    handleSubmit(e){
        axios.post('http://localhost:8080/data', JSON.stringify(this.state))
            .then((res)=>{
                console.log(res);
            })
            .catch((error)=>{
                console.log(error);
            });
        this.myFormRef.reset();
        e.preventDefault();
    }

    render(){
        const {input, textarea, select} = this.props;

        return (
            <div className='col-12 px-0 py-4'>
                {
                    input ? (
                        <>
                            <h3 className='text-center' style={{'color':'#203139'}}>Settings for create Input </h3>
                            <div className='col-10 mx-auto mt-4'>
                                <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
                                    <div className="form-group row">
                                        <label htmlFor="label_inp" className="col-12 col-sm-3 col-form-label"> Label: </label>
                                        <div className="col-12 col-sm-9">
                                            <input type="text" className="form-control" id="label_inp" placeholder="" name="label" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="type_inp" className="col-12 col-sm-3 col-form-label"> Type: </label>
                                        <div className="col-12 col-sm-9">
                                            <select name="type" value={this.state.type} onChange={this.handleChange} className="form-control" id="type_inp">
                                                {
                                                    input.type.map((v)=>{
                                                        return(
                                                            <>
                                                                <option value={v} style={{textTransform: 'capitalize'}}> {v} </option>
                                                            </>
                                                        );

                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name_inp" className="col-12 col-sm-3 col-form-label"> Name: </label>
                                        <div className="col-12 col-sm-9">
                                            <input type="text" className="form-control" id="name_inp" placeholder="" name="name" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    { this.state.type === 'button' || this.state.type === 'submit'  ? (
                                        <div className="form-group row">
                                            <label htmlFor="val_inp" className="col-12 col-sm-3 col-form-label"> Value: </label>
                                            <div className="col-12 col-sm-9">
                                                <input type="text" className="form-control" id="val_inp" placeholder="" name="value" onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="form-group row">
                                            <label htmlFor="plc_inp" className="col-12 col-sm-3 col-form-label"> Placeholder: </label>
                                            <div className="col-12 col-sm-9">
                                                <input type="text" className="form-control" id="plc_inp" placeholder="" name="placeholder" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                    )}
                                    <div className='text-right'>
                                        <input type="submit" value="Submit" className='btn btn-submit' />
                                    </div>
                                </form>
                            </div>
                        </>

                    ) : (
                        <></>
                    )
                }
                {
                    textarea ? (
                        <>
                            <div>
                                <h3 className='text-center' style={{'color':'#203139'}}>Settings for create Textarea </h3>
                                <div className='col-10 mx-auto mt-4'>
                                    <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
                                        <div className="form-group row">
                                            <label htmlFor="label_txtarea" className="col-12 col-sm-3 col-form-label"> Label: </label>
                                            <div className="col-12 col-sm-9">
                                                <input type="text" className="form-control" id="label_txtarea" placeholder="" name="label" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="name_txtarea" className="col-12 col-sm-3 col-form-label"> Name: </label>
                                            <div className="col-12 col-sm-9">
                                                <input type="text" className="form-control" id="name_txtarea" placeholder="" name="name" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="val_txtarea" className="col-12 col-sm-3 col-form-label"> Value: </label>
                                            <div className="col-12 col-sm-9">
                                                <input type="text" className="form-control" id="val_txtarea" placeholder="" name="value" onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="plc_txtarea" className="col-12 col-sm-3 col-form-label"> Placeholder: </label>
                                            <div className="col-12 col-sm-9">
                                                <input type="text" className="form-control" id="plc_txtarea" placeholder="" name="placeholder" onChange={this.handleChange} />
                                            </div>
                                        </div>

                                        <div className='text-right'>
                                            <input type="submit" value="Submit" className='btn btn-submit' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    ) : (
                        <></>
                    )
                }

                {
                    select ? (
                        <>
                            <h3 className='text-center' style={{'color':'#203139'}}>Settings for create Select Option </h3>
                            <div className='col-10 mx-auto mt-4'>
                                <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
                                    <h5 className='pb-1'>Settings for Select</h5>
                                    <div className="form-group row" style={{'color':'#203139'}}>
                                        <label htmlFor="label_select" className="col-12 col-sm-3 col-form-label"> Label: </label>
                                        <div className="col-12 col-sm-9">
                                            <input type="text" className="form-control" id="label_select" placeholder="" name="labelSelect" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name_select" className="col-12 col-sm-3 col-form-label"> Name: </label>
                                        <div className="col-12 col-sm-9">
                                            <input type="text" className="form-control" id="name_select" placeholder="" name="nameSelect" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="val_select" className="col-12 col-sm-3 col-form-label"> Value: </label>
                                        <div className="col-12 col-sm-9">
                                            <input type="text" className="form-control" id="val_select" placeholder="" name="valueSelect" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <h5 className='pb-1' style={{'color':'#203139'}}>Settings for Option</h5>
                                    <div className="form-group row">
                                        <label htmlFor="label_option" className="col-12 col-sm-3 col-form-label"> Label: </label>
                                        <div className="col-12 col-sm-9">
                                            <input type="text" className="form-control" id="label_option" placeholder="" name="labelOption" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="val_option" className="col-12 col-sm-3 col-form-label"> Value: </label>
                                        <div className="col-12 col-sm-9">
                                            <input type="text" className="form-control" id="val_option" placeholder="" name="valueOption" onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                    <div className='text-right'>
                                        <input type="submit" value="Submit" className='btn btn-submit' />
                                    </div>
                                </form>
                            </div>
                        </>
                    ) : (
                        <></>
                    )

                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    input: state.inpView,
    textarea: state.txtAreaView,
    select : state.selectOptView
});

export default connect(mapStateToProps, null)(ViewFormSettings);

