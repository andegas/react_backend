import React from 'react';
import Input from './input/InputForm';
// import Checkbox from './checkbox/CheckboxForm';
// import Radio from './radio/RadioForm';
import Textarea from './textarea/TextareaForm';
import Select from './select_option/SelectForm';

class FormItems extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='col-12 px-0 form_items'>
                <Input />
                {/*<Checkbox />*/}
                {/*<Radio />*/}
                <Textarea />
                <Select />
            </div>
        );
    }
}

export default FormItems;
