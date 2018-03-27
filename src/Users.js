import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Users = ({ users }) => {
  return (
    <div>
      <h2>All Users</h2>
      <ul>
      {
        users.map(user => {
          return (
            <li key={ user.id }>
              <Link to={ `/users/${user.id}`}>
                { user.name }
              </Link>
              <br />
              <button className="btn btn-danger"> - </button>
                <span className="badge">{ user.rating }</span>
              <button className="btn btn-success"> + </button>
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
