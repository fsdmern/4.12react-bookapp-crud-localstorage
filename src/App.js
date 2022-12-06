import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './styles.scss';
import BookRouter from './router/BookRouter';


function App() {
  return (
    <BrowserRouter>
        <BookRouter />
    </BrowserRouter>
  );
}

export default App;
