import React from 'react';
import Frames from './Frames';
import Pins from './Pins';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: Array(10).fill(0),
      throwCount: 0,
      roundCount: 0,
    };
    this.getState = this.getState.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  getState(key) {
    return this.state[key];
  }

  updateState(key, value) {
    const obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  render() {
    const { scores, throwCount, roundCount } = this.state;
    return (
      <div className="ui container">
        <h1>Bowling</h1>
        <div>
          Current Round: {roundCount}
        </div>
        <div>
          Current Throw: {throwCount}
        </div>
        <Frames scores={scores}/>
        <Pins updateState={this.updateState} getState={this.getState}/>
      </div>
    );
  }
}

export default App;