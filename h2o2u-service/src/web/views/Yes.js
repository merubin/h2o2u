import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
// ...
import 'yes.css';
export default React.createClass({

  getInitialState() {
    return {
      isOkay: false
    }
  },
    reportProblem() {
        window.location.assign("#/formView");
    },
    render() {
        let { zipcode } = this.props.params
        console.log(zipcode);
        let isOkay = true;
        if (zipcode === '20001') {
            isOkay = false;
        }

        let isOkayClassName;
        let isYes;
        if(isOkay) {
            isYes = <div>Yes</div>;
            isOkayClassName = 'isOkay'
        } else {
            isYes = <div>No</div>;
            isOkayClassName = 'isNotOkay';
        }

        return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}  className={isOkayClassName}>
        <div style={{ height: 'calc(100vh - 40px)'}}>
          <div id="question">Is Your Water Safe To Drink?</div>
            <div id="body-yes">
                <div id="background" alt="drinkwater">
                <h1 id="signal">{isYes}</h1>
                    <div id="location">
                        Washington, D.C.
                    </div>
                </div>
            </div>
            </div>
            <footer>
              <div>
                <RaisedButton label="Report a Problem" fullWidth={true} fullHeight={true}
                    onClick={this.reportProblem}
                ><Link to="/formView"/></RaisedButton>
              </div>
            </footer>
        </div>
      )
    }
  }
);
