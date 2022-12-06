import React from 'react';
import Book from './Book';
import _ from 'lodash';

const BookList = ({books, setBooks}) => {
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <h1>List of Books</h1>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No Books Available. Add Some Books</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BookList;
