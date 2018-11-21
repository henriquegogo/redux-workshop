import React, { Component } from 'react';
import { connect } from 'react-redux';

import { notification } from '../actions/notification';

class Main extends Component {
  notify = (e) => {
    e.preventDefault();

    let input_message = e.target.message.value;
    this.props.dispatch(notification(input_message));
  }

  render() {
    return (
      <main>
        <form onSubmit={this.notify}>
          <input type='text' name='message' />
          <input type='submit' value='Notify' />
        </form>
      </main>
    );
  }
}

export default connect(state => state)(Main);
