import React from 'react';
import {Router,Route,IndexRoute,hashHistory,Link} from 'react-router';
import {ReactDOM,render} from 'react-dom';

import Login from '../component/login/login';
import Main from '../component/Main';

export default class rootRoute extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute  path="/login" component={Login}></IndexRoute >
                </Route>
            </Router>
        )
    }
}
