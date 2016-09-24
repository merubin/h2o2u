import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
export default class Col extends React.Component {

    doNext() {
        $.post("http://localhost:8080/0.1/water", "There is a problem with someones water, see the dashboard at " + window.latlong, {
            success: function(data) {
            },
            error: function(xhr) {
            }
        });

        window.location.assign("#/");
    }

    render() {

        return (
         <div>
          <h1>Thank you</h1>
          <RaisedButton id="button" type="button" onClick={this.doNext}>Return</RaisedButton>
         </div>
    )
    }
}
