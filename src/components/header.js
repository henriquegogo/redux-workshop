import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header>
        <b>Reduza o stress</b>
        <span style={{float: 'right'}}>{this.props.notification}</span>
      </header>
    );
  }
}

export default connect(state => state.header)(Header);
