import React from 'react';
import UserList from './UserList';

class App extends React.Component{
    state = this.props.store.getState();
    render() {
        return (
            <UserList
                users={this.state.users}
                store={this.props.store}
            />
        );
    }
}

export default App;