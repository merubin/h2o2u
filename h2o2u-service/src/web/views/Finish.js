import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

export default class Col extends React.Component {

    doNext() {
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
