/* eslint-disable react/prop-types */
import React from 'react';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow() {
    const { data } = this.props;
    return data.map((row, index) => (
      <tr key={index.toString().concat('row')}>
        <td>{row.date}</td>
        <td>{row.description}</td>
        <td>{row.lang}</td>
        <td>{row.category1}</td>
        <td>{row.category2}</td>
        <td>{row.granularity}</td>
      </tr>
    ));
  }

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>date</th>
            <th>description</th>
            <th>lang</th>
            <th>category1</th>
            <th>category2</th>
            <th>granularity</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRow()}
        </tbody>
      </table>
    );
  }
}

export default Page;
