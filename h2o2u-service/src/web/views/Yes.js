import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

export default React.createClass({

  getInitialState() {
    return {
      isOkay: false
    }
  },
    render() {
      let noClassName;
      let isYes;
      if(this.state.isOkay) {
        isYes = <div>Yes</div>;
        noClassName = ''
      } else {
        isYes = <div class = "No">No</div>;
        noClassName = 'noStyle';

      }

        return (
        <div id="container">
          <div id="question">Is Your Water Safe To Drink?</div>
            <div id="body-yes">
                <div id="background" alt="drinkwater"  className={noClassName}>
                <h1 id="signal">{isYes}</h1>
                    <div id="location">
                        Washington, D.C.
                    </div>
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
);
