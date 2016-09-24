import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

export default class Col extends React.Component {

    doNext() {
        window.location.assign("#/finish");
    }

    render() {

        return (
         <div>
          <h1>Smell</h1>
          <div id="eyeimg" style={{ display: 'flex' ,
              justifyContent: 'center',
              alignItems: 'center'}}>
            <img id="eye" src="http://rubinsworld.com/h2o2u/smell.png" alt="smell"/>
          </div >

             <div style={{background: 'white'}}>
                 <List>
                    <ListItem primaryText="Chlorine" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Gasoline" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Ammonia" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Rotten" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Putrid" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Sewage" leftCheckbox={<Checkbox />} />
                </List>
            </div>

          <RaisedButton id="button" type="button" onClick={this.doNext}>Next</RaisedButton>

         </div>
    )
    }
}
