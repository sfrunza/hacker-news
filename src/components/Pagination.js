import React from "react";

const Pagination = ({ page, nbPages, handlePage }) => {
  return (
    <div className="pagination">
      <button onClick={() => handlePage("prev")}>prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => handlePage("next")}>next</button>
    </div>
  );
};

export default Pagination;
