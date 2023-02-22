import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { initialContacts } from 'dataBase';
import { Layout } from './App.siled';
import { Form } from 'components';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = newContact => {
    const { name: userName } = newContact;
    const { contacts } = this.state;

    let isContactExists = contacts.some(({ name }) => name === userName);
    if (isContactExists) {
      return alert(`${userName} is already in contacts!`);
    }

    newContact = { ...newContact, id: nanoid(8) };
    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
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
        {filteredContacts.length ? (
          <div>
            <label>
              Find contacts by name
              <input
                type="text"
                value={this.state.filter}
                onChange={this.onFilter}
              />
            </label>
            <ul>
              {filteredContacts.map(({ id, name, number }) => {
                return (
                  <li key={id}>
                    <span>{name}</span>
                    <span>{number}</span>
                    <button
                      type="button"
                      onClick={() => this.deleteContact(id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p>No any contacts in phonebook</p>
        )}
      </Layout>
    );
  }
}

export { App };
