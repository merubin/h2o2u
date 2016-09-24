import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

export default class Yes extends React.Component {

    render() {
      console.log('hello');
        return (
        <div id="container">
            <div id="body-yes">
                <div id="background" alt="drinkwater">
                <h1 id="signal">Yes</h1>
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
