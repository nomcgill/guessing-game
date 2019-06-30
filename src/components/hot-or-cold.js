import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class HotOrCold extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            guess: '',
            hiddenInt: Math.floor(Math.random() * 101)
        };
    }
      
    setGuess(guess) {
        this.setState(
          {guess}
        );
        console.log(typeof(this.state.guess))
    }
  
    setHiddenInt(hiddenInt){
        this.setState(() => ({
          hiddenInt: Math.floor(Math.random() * 101)
          }
        ))
      console.log("new set hiddenInt: " + this.state.hiddenInt)
    }
 
  
    render() {
      function testHiddenInt(hiddenInt, guess){
        if (Number(guess) === Number(hiddenInt)){
          return 'You got it!'
        }
        if (Math.abs(guess - hiddenInt) < 3) {
          return 'ouch! ouch! scalding!'
        }
        if (Math.abs(guess - hiddenInt) < 5) {
          return 'pretty hot'
        }
        if (Math.abs(guess - hiddenInt) < 10) {
          return 'warm'
        }
        if (Math.abs(guess - hiddenInt) < 18) {
          return 'lukewarm, I guess'
        }
        else {
          return 'cold'
        }
      }  
        return (
            <form>
                <NumberInput id="input-guess" label="Guess a number, 1-100." min={1} max={100} value={this.state.guess} 
                  onChange={value => 
                    this.setGuess(value)}/>
                <Output id="how-close" label="Close?" value={testHiddenInt(this.state.hiddenInt,this.state.guess)}/>
                <button onClick={() => this.setHiddenInt()}>Try Again!</button>
            </form>
        );
    }
}

