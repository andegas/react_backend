import React from 'react';

class SelectForm extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return (
            <div className='col-12 px-0 py-1 f_item'>
                <input type="button" value='Select Option' className='btn px-4' />
            </div>
        );
    }
}

export default SelectForm;