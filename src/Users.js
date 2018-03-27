import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveUser } from './store';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user,
      rating: this.props.users.rating
    };
    this.onChangeRating = this.onChangeRating.bind(this);
  }

  onChangeRating(ev, selectedUser) {
    const updatedUser = {
      id: selectedUser.id,
      name: selectedUser.name,
      rating: ev.target.value
    };
    this.props.saveUser(updatedUser);
  }

  render() {
    const { users } = this.props;
    const { onChangeRating } = this;
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
                <button className="btn btn-danger" onClick={(ev) => onChangeRating(ev, user)} value={ (user.rating * 1) - 1 }> - </button>
                  <span className="badge">{ user.rating }</span>
                <button className="btn btn-success" onClick={(ev) => onChangeRating(ev, user)} value={ (user.rating * 1) + 1 }> + </button>
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    saveUser: (user) => dispatch(saveUser(user, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
