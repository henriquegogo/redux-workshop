import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
  render() {
    return (
      <aside>
        <a href='#'>Home</a><br />
        <a href='#'>Profile</a><br />
        <a href='#'>About</a>
        <hr />
        <span>{this.props.notification}</span>
      </aside>
    );
  }
}

export default connect(state => state.sidebar)(Sidebar);
