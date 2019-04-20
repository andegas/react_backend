import React from 'react';
import { Link } from 'react-router-dom';
// import FormItems from '../shared/formitems/FormItems';
import ViewFormSettings from '../shared/formitems/ViewFormSettings';
import JsonView from '../shared/formitems/JsonView';
import List from '../shared/List/List';

class Create extends React.Component{
    constructor(props) {
        super(props);
        this.listItems = ['a', 'b', 'c'];
    }
    render(){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-3 px-0'>
                                {/*<FormItems />*/}
                                <List type='form_list' listItems={this.listItems}/>
                            </div>
                            <div className='col-5 px-0' style={{'backgroundColor':'#d7d6d2'}}>
                                <ViewFormSettings />
                            </div>
                            <div className='col-4 px-0' style={{'backgroundColor':'#e3e3e3'}}>
                                <JsonView />
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
