import React from 'react'
import { render } from 'react-dom'
import User from 'User'
import PageNotFound from 'PageNotFound'
import MainApp from 'MainApp'
import Yes from 'Yes'
<<<<<<< c532873d344322f81b8f116ed43ee4632ffb4924
import Col from 'Col'
import { browserHistory, Router, Route, Link } from 'react-router';
import 'h202.css';
import "Col.css";
=======
import formView from 'formView'
import { browserHistory, Router, Route, Link } from 'react-router';
import 'h202.css';
import "formView.css";
>>>>>>> Add files
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render((
    <MuiThemeProvider>
        <Router>
            <Route path="/yes" component={Yes} />
            <Route path="/color" component={Col} />
            <Route path ="/formView" component={formView}/>
            <Route path="/" component={MainApp}>
                <Route path="user/:userID" component={User} />
            </Route>
            <Route path="*" component={PageNotFound} />
        </Router>
    </MuiThemeProvider>

), document.getElementById('example'))
