import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import './App.css';

import Header from './components/headerOldstyle';
import Main from './components/mainOldstyle';
import Sidebar from './components/sidebarOldstyle';

const store = createStore(reducers);

class App extends Component {
  state = {
    notification: 'No notifications'
  }

  notify = (e) => {
    e.preventDefault();

    this.setState({notification: e.target.message.value});
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header notification={this.state.notification} />
          <Main notifyAll={this.notify} />
          <Sidebar notification={this.state.notification} />
        </div>
      </Provider>
    );
  }
}

export default App;
