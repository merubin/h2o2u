import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

export default class Col extends React.Component {

    doNext() {
        window.location.assign("#/taste");
    }

    render() {
        let colors = ['blue', 'green'];
        let m = [];
        for(var color of colors) {
            m.push(<div style={{ height: '10px',
                width: '125px',
                display: 'inline-block',
                background: color}}></div>);

        }

      console.log("Color is here");
        return (
         <div>
          <h1>Color</h1>
             <span>What color is the water?</span>
          <div id="eyeimg" style={{ display: 'flex' ,
              justifyContent: 'center',
              alignItems: 'center'}}>
            <img id="eye" src="http://rubinsworld.com/h2o2u/eye2.gif" alt="eye"/>
          </div >
            <div style={{background: 'white'}}>
                <div>
                {m}
                    </div>
             <Slider step={0.10} value={.5} />
            </div>

          <RaisedButton id="button" type="button" onClick={this.doNext}>Next</RaisedButton>

         </div>
    )
    }
}
