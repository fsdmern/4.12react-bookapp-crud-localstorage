import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

const BookForm = (props) => {
  const [book, setBook] = useState({
    bookname: props.book ? props.book.bookname : '',
    author: props.author ? props.book.author : '',
    quantity: props.quantity ? props.book.quantity : '',
    price: props.price ? props.book.price : '',
    date: props.date ? props.book.date : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const {bookname, author, price, quantity} = book;

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, price, quantity];
    let errorMsg = '';
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4,
        bookname,
        author,
        price,
        quantity,
        date: new Date(),
      };
      props.handleSubmit(book)
    } else {
      errorMsg = 'Please fill out all the fields';
    }
    setErrorMsg(errorMsg);
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case 'price':
        if(value === '' || value.match(/^\d{1,}(\.\d{0-2})?$/)) {
            setBook((prevState) => ({
              ...prevState,
              [name]: value,
            }));
        }
        break;

      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="book-form">
      {errorMsg && <p className="errormsg">{errorMsg}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            className="input-control"
            name="bookname"
            placeholder="Enter name of the book"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            type="text"
            className="input-control"
            name="author"
            placeholder="Enter name of the Author"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            className="input-control"
            name="quantity"
            placeholder="Enter available quantity"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            className="input-control"
            name="price"
            placeholder="Enter book price"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
