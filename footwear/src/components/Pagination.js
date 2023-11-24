import React from "react";

function Pagination({ totalProducts, productsPerPage, setCurrentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="text-center text-xl">
      {pages.map((page, index) => {
        return (
          <button
            className="mr-2 h-10 w-10 rounded-full bg-gray-800 text-white "
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
