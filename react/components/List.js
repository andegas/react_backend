import React from 'react';
import {Link} from 'react-router-dom';
import FormItem from './FormItem';
import Element from './Element';


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formList: [{
                id:0,
                name: 'Dummy Form',
            }],
            elementList: [
                {
                    id:0,
                    name: 'Dummy Element',
                }
            ]
        };
    }

    render() {
        return (
            <div>{this.props.type === 'form_list' &&
            <div>
                <Link to="/create"> <span className='plus_icon'> +</span> Add new Form </Link>
                {this.state.formList.map((el,i)=> <FormItem key={i} item={el}/>)}
            </div>
            }
            {this.props.type === 'element_list' &&
              this.state.elementList.map((el,i)=> <Element key={i} item={el}/>)
            }
            </div>
        );
    }
}

export default List;