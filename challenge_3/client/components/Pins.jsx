import React from 'react';
import Bowling from '../models/Bowling';

class Pins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinCount: '',
    };
    this.renderOptions = this.renderOptions.bind(this);
    this.updateData = this.updateData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.game = new Bowling();
  }

  renderOptions(num) {
    const result = [];
    for (let i = 0; i <= num; i += 1) {
      let msg;
      i < 2 ? msg = i + ' pin' : msg = i + ' pins';
      result.push(
        <option key={i.toString()} value={i.toString()}>{msg}</option>
      );
    }
    return result;
  }

  updateData(e) {
    this.setState({
      pinCount: e.target.value,
    });
  }

  handleSubmit() {
    const { pinCount } = this.state;
    const { getState, updateState } = this.props;
    if (pinCount.length > 0) {
      const throwCount = getState('throwCount');
      const roundCount = getState('roundCount');
      if (roundCount < 10) {
        if (throwCount < 2 && this.game.getFrame()[roundCount].status !== 'strike') {
          this.game.setScore(roundCount, throwCount + 1, Number(pinCount));
          this.game.addBonus();
          updateState('scores', this.game.getScore());
          updateState('throwCount', throwCount + 1);
        } else {
          this.game.setScore(roundCount + 1, 1, Number(pinCount));
          this.game.addBonus();
          updateState('scores', this.game.getScore());
          updateState('throwCount', 1);
          updateState('roundCount', roundCount + 1);
        }
      } else {
        alert('game over!');
      }
    } else {
      alert('please select a pin quantity.');
    }
  }

  render() {
    return (
      <div>
        <div>
          <select onChange={this.updateData}>
            <option value="">--- select pin quantity ---</option>
            {this.renderOptions(10)}
          </select>
        </div>
        <br></br>
        <button className="ui small blue button" onClick={this.handleSubmit}>throw</button>
      </div>
    );
  }
}

export default Pins;