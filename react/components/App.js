import React from 'react';
import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './screens/Home';
import Create from './screens/Create';
const history = createBrowserHistory();

class App extends React.Component{
    render(){
        return (
            <Router history={history}>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/create" exact component={Create} />
                </div>
            </Router>
        );
    }
}

export default App;