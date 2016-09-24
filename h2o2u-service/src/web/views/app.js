import React from 'react'
import { render } from 'react-dom'
import User from 'User'
import PageNotFound from 'PageNotFound'
import MainApp from 'MainApp'
import { browserHistory, Router, Route, Link } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render((
    <MuiThemeProvider>
        <Router>
            <Route path="/" component={MainApp}>
                <Route path="user/:userID" component={User} />
            </Route>
            <Route path="*" component={PageNotFound} />
        </Router>
    </MuiThemeProvider>

), document.getElementById('example'))
