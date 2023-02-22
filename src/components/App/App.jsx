import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './App.siled';
import { Form } from 'components';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = userData => {
    const newContact = { ...userData, id: nanoid(8) };
    // let { contacts } = this.state;
    this.setState({ contacts: [newContact, ...this.state.contacts] });
  };

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact}></Form>
        <ul>
          {this.state.contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <span>{name}</span>
                <span>{number}</span>
              </li>
            );
          })}
        </ul>
      </Layout>
    );
  }
}

export { App };
