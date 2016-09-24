import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

export default class No extends React.Component {

    render() {
        return (
        <div id="container">
            <div id="body-no">
                <div id="background" alt="drinkwater">
                <h1 id="signal">No</h1>
                </div>
                <div id="location">Washington, D.C.</div>
            </div>
            <footer>
              <div>
                <RaisedButton className="buttonText" label="Report a Problem" fullWidth={true} fullHeight={true} />
              </div>
            </footer>
        </div>
    )
    }
}
