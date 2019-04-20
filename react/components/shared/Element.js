import React from 'react';


class Element extends React.Component {
    constructor(props) {
        super(props);
    }

    selectElement(){

    }
    render() {
        return (
            <div>
                {this.props.item.name}
            </div>
        );
    }
}

export default Element;