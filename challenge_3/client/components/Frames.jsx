import React from 'react';

class Frames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: Array(10).fill(0),
    };
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.scores) !== JSON.stringify(nextProps.scores)){
      this.setState({
        scores: nextProps.scores,
      });
    }
  }

  renderRow(type) {
    const result = [];
    const { scores } = this.state; 
    for (let i = 0; i < 10; i += 1) {
      if (type === 'head') {
        result.push(
          <th key={'round' + i}>Round {i}</th>
        );
      } else {
        result.push(
          <td key={'score' + i}>{scores[i]}</td>
        );
      }
    }
    return result;
  }

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            {this.renderRow('head')}
          </tr>
        </thead>
        <tbody>
          <tr>
            {this.renderRow('body')}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Frames;