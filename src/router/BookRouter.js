import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';
import EditBook from '../components/EditBook';
import useLocalStorage from '../hooks/useLocalStorage';

const BookRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);
  return (
    <div>
      <Header />
      <div className="main-content">
        <Switch>
          <Route
            path="/"
            exact={true}
            render={(props) => (
              <BookList {...props} books={books} setBooks={setBooks} />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddBook {...props} books={books} setBooks={setBooks} />
            )}
          />
          <Route
            path="/edit/:id"
            render={(props) => (
              <EditBook {...props} books={books} setBooks={setBooks} />
            )}
          />
          <Route component={() => <Redirect to="/"/>}/>
        </Switch>
      </div>
    </div>
  );
};

export default BookRouter;
