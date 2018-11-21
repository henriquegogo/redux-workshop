import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main>
        <form onSubmit={this.props.notifyAll}>
          <input type='text' name='message' />
          <input type='submit' value='Notify' />
        </form>
      </main>
    );
  }
}

export default Main;
