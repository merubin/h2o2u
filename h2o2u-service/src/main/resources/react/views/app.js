import React from 'react'
import { render } from 'react-dom'
import User from 'User'
import PageNotFound from 'PageNotFound'
import MainApp from 'MainApp'
import { browserHistory, Router, Route, Link } from 'react-router'
import useBasename from 'history/lib/useBasename'


render((
  <Router history={withExampleBasename(browserHistory, __dirname)}>
    <Route path="/" component={MainApp}>
      <Route path="user/:userID" component={User} />
    </Route>
    <Route path="*" component={PageNotFound} />
  </Router>
), document.getElementById('example'))

function withExampleBasename(history, dirname) {
    return useBasename(() => history)({ basename: `/${dirname}` })
}
