import React from 'react';
import axios from 'axios';
import { EPROTONOSUPPORT } from 'constants';

class Config extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charttype: 'bar',
      currency: 'usd',
      start: '2017-09-01',
      end: '2018-09-01',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleInput(e) {
    const obj = {};
    obj[e.target.id] = e.target.value;
    this.setState(obj);
    e.preventDefault();
  }

  handleUpdate(e) {
    const { charttype, currency, start, end } = this.state;
    const { toggleView } = this.props;
    if ((new Date(start).getTime() < new Date(end).getTime())) {
      axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&&start=${start}&end=${end}`)
        .then(result => {
          toggleView('chart', charttype, result.data.bpi);
        });
    } else {
      alert('please input correct start and end dates.');
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="ui form">
          <div className="equal width fields">
            <div className="field">
              <label>Chart Type</label>
              <select id="charttype" onChange={this.handleInput} required>
                <option value="bar">Bar</option>
                <option value="line">Line</option>
              </select>
            </div>
            <div className="field">
              <label>Currency</label>
              <select id="currency" onChange={this.handleInput} required>
                <option value="cny">CNY</option>
                <option value="usd">USD</option>
                <option value="jpy">JPY</option>
              </select>
            </div>
            <div className="field">
              <label>Start Date</label>
              <input type="date" id="start" onChange={this.handleInput} required></input>
            </div>
            <div className="field">
              <label>End Date</label>
              <input type="date" id="end" onChange={this.handleInput} required></input>
            </div>
          </div>
          <button className="ui blue fluid button" role="button" onClick={this.handleUpdate} >Update</button>
        </form>
      </div>
    );
  }
}

export default Config;