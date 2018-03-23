import React, { Component } from 'react';
import Nav from './Nav';
import { loadUsers } from './store';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';

class App extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={ Home } />
          <Route path="/users" exact component={ Users } />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(loadUsers())
  };
};

export default connect(null, mapDispatchToProps)(App);
