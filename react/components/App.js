import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './home/Home';
import Create from './create/Create';
import rootSaga from '../sagas';
const history = createBrowserHistory();
import reducers from '../reducers';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


class App extends React.Component{
    render(){
        return (
            <Provider store={store}>

                <Router history={history}>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/create" exact component={Create} />
                    </div>
                </Router>

            </Provider>
        );
    }
}


export default App;
