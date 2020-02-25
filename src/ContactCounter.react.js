import React from 'react';

export class Counter extends React.Component {
    state = {
        count: 0
    }

  // change code below this line
  increment() {
   this.setState({
     count: this.state.count + 1,
   })
  };
  decrement() {
   this.setState({
     count: this.state.count - 1,
   })
  };
  reset() {
   this.setState({
     count: 0,
   })
  };

  // change code above this line
  render() {
    console.log(this.state);
    return (
      <div class="counter">
        <button data-id="increment-button" className='inc' onClick={this.increment.bind(this)}>Increment!</button>
        <button data-id="decrement-button" className='dec' onClick={this.decrement.bind(this)}>Decrement!</button>
        <button data-id="reset-button" className='reset' onClick={this.reset.bind(this)}>Reset</button>
        <h1 data-id="counter">Current Count: {this.state.count}</h1>
      </div>
    );
  }
};