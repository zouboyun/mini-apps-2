import React from 'react';
import Config from './Config';
import Chart from './Chart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'blank',
      type: 'bar',
      data: {},
      currency: '',
    };
    this.toggleView = this.toggleView.bind(this);
    this.renderChart = this.renderChart.bind(this);
  }

  toggleView(newView, newType, data, currency) {
    this.setState({
      view: newView,
      type: newType,
      data: data,
      currency: currency,
    });
  }

  renderChart() {
    const { view, type, data, currency } = this.state;
    if (view === 'chart') {
      return (
        <Chart type={type} data={data} currency={currency}/>
      );
    }
  }

  render() {
    return  (
      <div className="ui container">
        <h1>Cryptocurrency Charting</h1>
        {this.renderChart()}
        <Config toggleView={this.toggleView}/>
      </div>
    );
  }
}

export default App;