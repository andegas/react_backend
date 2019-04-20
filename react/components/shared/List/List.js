import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';


class List extends React.Component{
    constructor(props){
        super(props);
        this.listItems = this.props.listItems;
    }

    render(){
        return (
            <div>
                {
                    this.props.type==='form_list' &&
                    <div>
                        <Link to="/create"> <span className='plus_icon'> +</span> Add new Form </Link>
                        {
                            this.listItems.map((v, k)=> {
                                return <ListItem key={k} value={v}/>;
                            })
                        }
                    </div>

                }
            </div>
        );
    }
}

export default List;
