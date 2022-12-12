import React from 'react';
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';
import {useContext} from 'react';

const AddBook = ({history}) => {
  const {books, setBooks} = useContext(BooksContext);

  const handleSubmit = (book) => {
    setBooks([book, ...books]);
    console.log(book);
    alert('Book Submitted Successfully');
    history.push('/');
  };

  return (
    <React.Fragment>
      <h2>Add Book</h2>
      <BookForm handleSubmit={handleSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
