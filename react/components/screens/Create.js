import React from 'react';
import { Link } from 'react-router-dom';
import FormItems from '../formItems/FormItems';

class Create extends React.Component{
    render(){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-3 px-0'>
                                <FormItems />
                            </div>
                            <div className='col-5 px-0' style={{'backgroundColor':'#d7d6d2'}}>

                            </div>
                            <div className='col-4 px-0'>

                            </div>
                        </div>

                    </div>
                    <div className='col-12'>
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;