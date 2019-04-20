import React from 'react';

class CheckboxForm extends React.Component{
    constructor(props) {
        super(props);
        this.checkboxView = this.checkboxView.bind(this);
    }

    checkboxView(){
        console.log('checkbox view');
    }

    render(){
        return (
            <div className='col-12 px-0 py-1 f_item'>
                <input type="button" value='Checkbox' className='btn px-4' onClick={this.checkboxView} />
            </div>
        );
    }
}

export default CheckboxForm;