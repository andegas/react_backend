import React from 'react';
import { Link } from 'react-router-dom';
// import FormItems from '../shared/formitems/FormItems';
// import ViewFormSettings from '../shared/formitems/ViewFormSettings';
// import JsonView from '../shared/formitems/JsonView';
import List from '../shared/List/List';
import Settings from '../shared/Settings'
import Form from '../shared/Form'

class Create extends React.Component{
    constructor(props) {
        super(props);
        this.listItems = ['Input', 'Textarea', 'Select'];
    }
    render(){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-3 px-0'>
                                {/*<FormItems />*/}
                                <List type='element_list' listItems={this.listItems}/>
                            </div>
                            <div className='col-5 px-0' style={{'backgroundColor':'#d7d6d2'}}>
                                <Form />
                            </div>
                            <div className='col-4 px-0' style={{'backgroundColor':'#e3e3e3'}}>
                                <div className='col-md-12'> 
                                    <Settings element={'input'}/>
                                </div>
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
