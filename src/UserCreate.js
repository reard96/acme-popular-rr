import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUser } from './store';

class UserCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'New user goes here :)',
      rating: 0
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChangeName(ev) {
    this.setState({ name: ev.target.value });
  }

  onChangeRating(ev) {
    this.setState({ rating: ev.target.value });
  }

  onSave(ev) {
    ev.preventDefault();
    const user = { id: this.props.id, name: this.state.name, rating: this.state.rating };
    this.props.saveUser(user);
  }

  render() {
    const { name, rating } = this.state;
    const { onChangeName, onChangeRating, onSave } = this;

    return (
      <div>
        <h1>Create a User</h1>
        <form onSubmit={ onSave }>
          <input type="text" value={ name } onChange={ onChangeName } />
          <input type="number" value={ rating } onChange={ onChangeRating } />
          <button>Create User</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    saveUser: (user) => dispatch(saveUser(user, history))
  };
};

export default connect(null, mapDispatchToProps)(UserCreate);
