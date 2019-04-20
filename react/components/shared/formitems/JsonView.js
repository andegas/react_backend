import React from 'react';

class JsonView extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='col-12 px-0 py-4 f_item'>
                <h3 className='text-center' style={{'color':'#203139'}}>Json View</h3>
            </div>
        );
    }
}

export default JsonView;
