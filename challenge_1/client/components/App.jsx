import React from 'react';
import Search from './Search';
import Page from './Page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.updateData = this.updateData.bind(this);
  }

  updateData(newData) {
    this.setState({
      data: newData,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="ui text container">
        <h1 className="ui header">Historical Events Finder</h1>
        <Search updateData={this.updateData} />
        <Page data={data} />
      </div>
    );
  }
}

export default App;
