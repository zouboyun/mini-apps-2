import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, type, currency } = this.props;
    const options = {
      title: {
        display: true,
        text: `Bitcoin Price Change in ${currency.toUpperCase()}`,
        fontSize: 20
      },
      legend: {
        display: true,
        position: 'bottom'
      },
      responsive: true,
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:false
              }
          }]
      },
    };
    const chartData = {
      labels: Object.keys(data),
      datasets: [{
        label: 'Bitcoin Price',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        fill: false,
        lineTension: 0.1,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0.5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(data),
      }],
    };
    if (type === 'bar') {
      return (
        <Bar 
          data={chartData}
          options={options}
        />
      );
    } else {
      return (
        <Line 
          data={chartData}
          options={options}
        />
      );
    }
  }
}

export default Chart;