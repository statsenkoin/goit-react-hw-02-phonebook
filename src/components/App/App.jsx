import React, { Component } from 'react';
import { Layout } from './App.siled';

class App extends Component {
  state = { a: '3' };

  render() {
    return <Layout>Phonebook</Layout>;
  }
}

export { App };
