import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

const Nav = ({ users, popular }) => {
  // hack to get popular.id to work
  let popularLink = '';
  if (popular !== undefined) {
    popularLink = popular.id;
  }

  return (
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: 'bold',
            color: 'green'
           }}
        >Home</NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/users"
          activeStyle={{
            fontWeight: 'bold',
            color: 'green'
          }}
          >Users ({ users.length })</NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/users/create"
          activeStyle={{
            fontWeight: 'bold',
            color: 'green'
          }}>Create a User</NavLink>
      </li>
      <li>
      <NavLink
        exact
        to={`/users/${popularLink}`}
        activeStyle={{
          fontWeight: 'bold',
          color: 'green'
        }}
        >ACME's most popular user: { popular ? popular.name : 'Nobody!' }</NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users,
    popular: users.sort((low, high) => { return high.rating - low.rating; })[0]
  };
};

const Navbar = withRouter(connect(mapStateToProps)(Nav));

export default Navbar;
