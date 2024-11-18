// Pagination.js
import React, { useState, useEffect } from 'react';

const Pagination = ({ data, cardsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(data.length / cardsPerPage);

  // Get the cards for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentCards.map((item) => (
        // render your card component here
        <div key={item._id}>{item.name}</div>
      ))}
      <div>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePageChange(pageNumber + 1)}>
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;