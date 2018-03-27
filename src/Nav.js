import React from 'react';
import { connect, matchPath } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ users }) => {
  return (
    <ul>
      <li>
      {
        path === '/' ? (
          <span>Home</span>
        ) : (
          <Link to="/">Home</Link>
        )
      }
      </li>
      <li>
      {
        path === '/users' ? (
          <span>Users ({ users.length })</span>
        ) : (
          <Link to="/users">Users ({ users.length })</Link>
        )
      }
      </li>
      <li>
      {
        path === '/users/create' ? (
          <span>Create a User</span>
        ) : (
          <Link to="/users/create">Create a User</Link>
        )
      }
    </li>
    </ul>
  );
};


const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

export default connect(mapStateToProps)(Nav);

