import React from 'react';
import { connect } from 'react-redux';

const Nav = ({ users }) => {
  return (
    <ul>
      <li>
        Home
      </li>
      <li>
        Users ({ users.length })
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
