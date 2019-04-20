import React from 'react';
import { Link } from 'react-router-dom';


class List extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {
                    this.props.type==='form_list' &&
                    <Link to="/create"> <span className='plus_icon'> +</span> Add new Form </Link>
                }
            </div>
        );
    }
}

export default List;
