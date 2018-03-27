import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

const Nav = ({ users }) => {
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
    </ul>
  );
};


const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

const Navbar = withRouter(connect(mapStateToProps)(Nav));

export default Navbar;
