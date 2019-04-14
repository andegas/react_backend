import React from 'react';

class TextareaForm extends React.Component{
    constructor(props) {
        super(props);
        this.txtareaView = this.txtareaView.bind(this)
    }

    txtareaView(){
        console.log('textarea view');
    }

    render(){
        return (
            <div className='col-12 px-0 py-1 f_item'>
                <input type="button" value='Textarea' className='btn px-4' onClick={this.txtareaView} />
            </div>
        );
    }
}

export default TextareaForm;