import React from 'react';
import ReactPaginate from 'react-paginate';
import Search from './Search';
import Page from './Page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pageCount: 0,
      currentPage: 0,
    };
    this.updateData = this.updateData.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  updateData(newData, newPage, newCurrentPage) {
    this.setState({
      data: newData,
      pageCount: newPage,
      currentPage: newCurrentPage,
    });
  }

  handlePageClick(data) {
    this.setState({
      currentPage: data.selected,
    });
  }

  render() {
    const { data, pageCount, currentPage } = this.state;
    if (pageCount === 0) {
      return (
        <div className="ui text container">
          <h1 className="ui header">Historical Events Finder</h1>
          <Search updateData={this.updateData} currentPage={currentPage} />
        </div>
      );
    }
    return (
      <div className="ui text container">
        <h1 className="ui header">Historical Events Finder</h1>
        <Search updateData={this.updateData} currentPage={currentPage} />
        <Page data={data} />
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
          forcePage={currentPage}
        />
      </div>
    );
  }
}

export default App;
