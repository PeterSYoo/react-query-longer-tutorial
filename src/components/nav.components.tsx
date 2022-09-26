import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-parallel">RQ Parallel Query</Link>
          </li>
          <li>
            <Link to="/rq-dynamic-parallel">RQ Dynamic Parallel Queries</Link>
          </li>
          <li>
            <Link to="/rq-dependent">RQ Dependent</Link>
          </li>
          <li>
            <Link to="/rq-paginated">RQ Paginated</Link>
          </li>
          <li>
            <Link to="/rq-homework">RQ Homework</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
