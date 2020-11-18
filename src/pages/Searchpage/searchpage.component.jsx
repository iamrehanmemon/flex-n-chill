import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import CardContainer from "../../components/card-container/card-container.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";

import "./searchpage.style.scss";

const SearchPage = () => {
  const location = useLocation();

  const Search_Api = `https://api.themoviedb.org/3/search/multi?api_key=755271bf57e0f95abab8489d7ef60135&query=${location.state.query}&page=1`;

  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch(Search_Api)
      .then((res) => res.json())
      .then((data) => {
        setSearch(data.results);
      });
  }, [Search_Api]);

  return (
    <div className="moviepage">
      <ScrollToTop />
      <CardContainer
        data={search}
        numberOfElements={"20"}
        title="Result for Your Search"
      />
    </div>
  );
};

export default SearchPage;
