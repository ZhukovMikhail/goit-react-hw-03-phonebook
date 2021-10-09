import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ContactForm from './Components/ContactForm/ContactForm.jsx';
import ContactList from './Components/Contacts/Contacts.jsx';
import Filter from './Components/Filter/Filter.jsx';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  hendleOnchange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };
  onSubmitForm = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(name + ' is already in contacts');
      return;
    }
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { name: name, id: uuidv4(), number: number },
      ],
    }));
  };
  deleteHandler = e => {
    console.dir(e.currentTarget.parentElement.id);
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== e.currentTarget.parentElement.id,
      ),
    });
  };
  render() {
    return (
      <div className={styles.section}>
        <>
          <div className={styles.phonebook}>
            <h2 className={styles.title}>Phonebook</h2>
            <ContactForm onSubmitForm={this.onSubmitForm} />
          </div>
          <h2 className={styles.title}>Contacts</h2>
          <Filter
            filterValue={this.state.filter}
            onFilterChange={this.hendleOnchange}
          />
          <ul className={styles.itemList}>
            <ContactList
              contItems={this.state.contacts}
              filteredValue={this.state.filter}
              deleteHandler={this.deleteHandler}
            />
          </ul>
        </>
      </div>
    );
  }
}
export default App;

// App.propTypes = {};
