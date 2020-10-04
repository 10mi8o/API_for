import React from 'react';
import { Link } from 'react-router-dom';

const GlobalNav = () => {
    return(
      <>
        <Link to="/">
          <li>Top</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </>
    )
}

export default GlobalNav;
