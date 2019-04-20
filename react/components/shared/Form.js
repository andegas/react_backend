import React from 'react';
import {connect} from 'react-redux';
import InputForms from './formitems/InputForm';
import SelectForms from './formitems/SelectForm';
import TextareaForm from './formitems/TextareaForm'


class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            form: props.form,
            elements: {
                input: (data, i)=>{
                    return <InputForms key={i} data={data} />
                },
                select: (data, i)=>{
                    return <SelectForms key={i} data={data}/>
                },
                textarea: (data, i)=>{
                    return <TextareaForm key={i} data={data}/>
                }
            }
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({form:nextProps.form})
    }
    render() {
        return (
            <div>
                <div className='text-center'>Form</div>
                <form>
                    <div className="col-12">
                        {this.state.form.map((el,i)=>(this.state.elements[el.element](el.data, i)))}                    
                    </div>
                </form>
            </div>
        );
    }
}

const mapStoreToProps = (state) => ({
    form: state.data.form,
});

export default connect(mapStoreToProps,null)(Form);
