import {NavLink} from 'react-router-dom';

import React from 'react';

const Header = () => {
  return (
    <Header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Book List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Book
        </NavLink>
      </div>
    </Header>
  );
};

export default Header;
