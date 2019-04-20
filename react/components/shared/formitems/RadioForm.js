import React from 'react';

class RadioForm extends React.Component{
    constructor(props) {
        super(props);
        this.RadioView = this.RadioView.bind(this);
    }

    RadioView(){
        console.log('radio view');
    }

    render(){
        return (
            <div className='col-12 px-0 py-1 f_item'>
                <input type="button" value='Radio' className='btn px-4' onClick={this.RadioView} />
            </div>
        );
    }
}

export default RadioForm;