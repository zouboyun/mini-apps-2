import React from 'react';

const Search = () => (
  <div className="ui huge category search">
    <div className="ui icon input">
      <input className="prompt" type="text" placeholder="Search historical event..." />
      <i className="search icon" />
    </div>
    <div className="results" />
  </div>
);

export default Search;
