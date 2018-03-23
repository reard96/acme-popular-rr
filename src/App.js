import React, { Component } from 'react';
import Nav from './Nav';
import { loadUsers } from './store';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    return (
      <Nav />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(loadUsers())
  };
};

export default connect(null, mapDispatchToProps)(App);
