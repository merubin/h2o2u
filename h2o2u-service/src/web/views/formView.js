import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

export default class formView extends React.Component {

    render() {
      console.log('hello');
        return (
          <div>
          <h1>Report</h1>
          <div className="navBarDiv">
            <nav className="navBar">
              <div className="senses" id="smell"></div>
              <div className="senses" id="touch"></div>
              <div className="senses" id="sight"></div>
              <div className="senses" id="taste"></div>
            </nav>
        </div>
        <RaisedButton id="button" type="button">Report a Problem</RaisedButton>

        </div>
    )
    }
}
