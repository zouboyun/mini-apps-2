/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { currentPage, updateData } = this.props;
    if (currentPage !== nextProps.currentPage) {
      const { keyword } = this.state;
      axios.get(`http://localhost:3000/events?q=${keyword}&_page=${nextProps.currentPage + 1}&_limit=10`)
        .then(result => updateData(result.data, Math.ceil(result.headers['x-total-count'] / 10), nextProps.currentPage));
    }
  }

  handleSearch(e) {
    const searchword = e.target.value;
    const { updateData } = this.props;
    this.setState({
      keyword: searchword,
    });
    axios.get(`http://localhost:3000/events?q=${searchword}&_page=1&_limit=10`)
      .then(result => updateData(result.data, Math.ceil(result.headers['x-total-count'] / 10), 0));
  }

  handleEnter(e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
      this.handleSearch(e);
    }
  }

  render() {
    return (
      <div className="ui huge category search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search historical event..."
            onChange={this.handleSearch}
            onKeyPress={this.handleEnter}
          />
          <i className="search icon" />
        </div>
      </div>
    );
  }
}

export default Search;
