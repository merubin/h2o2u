import React from 'react'
import { render } from 'react-dom'
import PageNotFound from 'PageNotFound'
import Yes from 'Yes'
import Col from 'Col'
import Taste from 'Taste'
import Smell from 'Smell'
import Finish from 'Finish'
import Intro from 'Intro'
import Store from 'Store'
import Fluxxor from 'fluxxor'
import actions from 'actions'
import formView from 'formView'
import { browserHistory, Router, Route, Link } from 'react-router';
import 'h202.css';
import "formView.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


var stores = {
    Store: new Store()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

var IntroWrapper = React.createClass({
    render: function () {
        return (
            <Intro flux={flux} hasProblem={false} />
        );
    }
});


render((
    <MuiThemeProvider>
        <Router>
            <Route path="/yes" component={Yes} />
            <Route path="/color" component={Col} />
            <Route path="/taste" component={Taste} />
            <Route path="/smell" component={Smell} />
            <Route path="/finish" component={Finish} />
            <Route path ="/formView" component={formView}/>
            <Route path="/intro" component={IntroWrapper} />

            <Route path="/" component={Yes} />
            <Route path="*" component={PageNotFound} />
        </Router>
    </MuiThemeProvider>

), document.getElementById('example'))
