import React from 'react';
import Input from './InputForm';
// import Checkbox from './checkbox/CheckboxForm';
// import Radio from './radio/RadioForm';
import Textarea from './TextareaForm';
import Select from './SelectForm';

class FormItems extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='col-12 px-0 form_items'>
                {/*<Input />*/}
                {/*<Checkbox />*/}
                {/*<Radio />*/}
                {/*<Textarea />*/}
                {/*<Select />*/}
            </div>
        );
    }
}

export default FormItems;
