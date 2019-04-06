import React from 'react';

class Comp extends  React.Component {
    constructor(props){
        super(props);

    }
    abc=()=>{
        this.setState(this.props.store);
        console.log(this.state);
    };
    componentDidMount() {
        setTimeout(()=>{
            this.subId = this.props.store.subscribe(this.abc);
        }, 1000);

    }
    componentWillUnmount() {
        this.props.store.unsubscribe(this.subId);
    }

    render() {
        return (
            <div>Search value{this.state && this.state.data.searchValue && <span>{this.state.data.searchValue}</span>}</div>
        );
    }
}
export default  Comp;