import React from 'react';
import Pins from './Pins';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Pins />
      </div>
    );
  }
}

export default App;