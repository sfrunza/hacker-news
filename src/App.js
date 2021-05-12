import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./redux/stories/actions";

import Stories from "./components/Stories";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";

const API = "https://hn.algolia.com/api/v1/search?";

const App = (props) => {
  const { hits, nbPages, page, query } = props.data;
  const fetchData = props.fetchData;
  const handleSearch = props.handleSearch;
  const handlePage = props.handlePage;

  useEffect(() => {
    fetchData(`${API}page=${page}&hitsPerPage=30&query=${query}`);
  }, [query, page, fetchData]);

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} query={query} />
      <Stories hits={hits} />
      <Pagination page={page} nbPages={nbPages} handlePage={handlePage} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(App);
