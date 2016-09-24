import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

export default class Col extends React.Component {

    doNext() {
        window.location.assign("#/smell");
    }

    render() {

        return (
         <div>
          <h1>Taste</h1>
          <div id="eyeimg" style={{ display: 'flex' ,
              justifyContent: 'center',
              alignItems: 'center'}}>
            <img id="eye" src="http://rubinsworld.com/h2o2u/taste.png" alt="taste"/>
          </div >

             <div style={{background: 'white'}}>
                 <span style={{color:'red'}}>Do not taste the water if you havn't already.</span>

                 <List>
                    <ListItem primaryText="Sweet" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Salty" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Sour" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Bitter" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Chlorinated" leftCheckbox={<Checkbox />} />
                </List>
            </div>

          <RaisedButton id="button" type="button" onClick={this.doNext}>Next</RaisedButton>

         </div>
    )
    }
}
