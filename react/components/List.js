import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';


class List extends React.Component{
    constructor(props){
        super(props);
        this.itemsList = this.props.listItems;
    }


    render(){
        return (
            <div>
                {
                    this.props.type==='form_list' &&
                    <Link to="/create"> <span className='plus_icon'> +</span> Add new Form </Link>
                }
                {
                    this.itemsList.forEach((v, k)=>{
                        <ListItem key={k} value={v}/> ;
                    })

                }

            </div>
        );
    }
}

export default List;
