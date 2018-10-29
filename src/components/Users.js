import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {users}
          {userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
mapStateToProps(state) => {
  return { users: state.users },
  return { userCount: state.userCount }
 };

export default connect(mapStateToProps)(Users)
