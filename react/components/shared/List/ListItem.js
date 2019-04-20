import React from 'react';


class ListItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <input type='button' value={this.props.value}/>
            </div>

        );
    }
}

export default ListItem;
