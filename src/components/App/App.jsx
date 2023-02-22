import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './App.siled';
import { Form } from 'components';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = userData => {
    const { name: userName } = userData;

    this.setState(({ contacts }) => {
      let isContactExists = contacts.some(({ name }) => name === userName);
      if (isContactExists) {
        return alert(`${userName} is already in contacts!`);
      }
      const newContact = { ...userData, id: nanoid(8) };
      return {
        contacts: [newContact, ...contacts],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContactsByName = () => {
    const { contacts, filter } = this.state;
    // if (!contacts) return null;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.filterContactsByName();
    return (
      <Layout>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact}></Form>
        <label>
          Find contacts by name
          <input
            type="text"
            value={this.state.filter}
            onChange={this.onFilter}
          />
        </label>
        {filteredContacts && (
          <ul>
            {filteredContacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  <span>{name}</span>
                  <span>{number}</span>
                  <button type="button" onClick={() => this.deleteContact(id)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </Layout>
    );
  }
}

export { App };
