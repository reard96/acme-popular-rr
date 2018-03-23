import React from 'react';
import { connect } from 'react-redux';

const Users = ({ users }) => {
  return (
    <div>
      <h2>All Users</h2>
      <ul>
      {
        users.map(user => {
          return (
            <li key={ user.id }>
              { user.name }
            </li>
          );
        })
      }
      </ul>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

export default connect(mapStateToProps)(Users);
