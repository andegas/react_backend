import React from 'react';

class InputForm extends React.Component{
    constructor(props) {
        super(props);
        this.inpView = this.inpView.bind(this);
    }

    inpView(){
        console.log('input view');
    }

    render(){
        return (
            <div className='col-12 px-0 py-1 f_item'>
                <input type="button" value='Input' className='btn px-4' onClick={this.inpView} />
            </div>
        );
    }
}

export default InputForm;