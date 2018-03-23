import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUser } from './store';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user ? this.props.user.name : ''
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChangeName(ev) {
    this.setState({ name: ev.target.value });
  }

  onSave(ev) {
    ev.preventDefault();
    const user = { id: this.props.id, name: this.state.name };
    this.props.saveUser(user);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ name: nextProps.user ? nextProps.user.name : '' });
  }

  render() {
    const { user } = this.props;
    const { name } = this.state;
    const { onChangeName, onSave } = this;

    if (!user) {
      return null;
    }
    return (
      <div>
        <h1>{ user.name }</h1>
        <form onSubmit={ onSave }>
          <input value={ name } onChange={ onChangeName } />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users }, { id }) => {
  const user = users.find(user => user.id === id);
  return {
    user
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    saveUser: (user) => dispatch(saveUser(user, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
