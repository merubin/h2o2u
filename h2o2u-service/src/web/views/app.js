import React from 'react'
import { render } from 'react-dom'
import User from 'User'
import PageNotFound from 'PageNotFound'
import MainApp from 'MainApp'
import { browserHistory, Router, Route, Link } from 'react-router'


render((
    <Router>
        <Route path="/" component={MainApp}>
            <Route path="user/:userID" component={User} />
        </Route>
        <Route path="*" component={PageNotFound} />
    </Router>
), document.getElementById('example'))
