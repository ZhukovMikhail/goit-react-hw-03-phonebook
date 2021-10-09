import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ContactForm from './Components/ContactForm/ContactForm.jsx';
import ContactList from './Components/Contacts/Contacts.jsx';
import Filter from './Components/Filter/Filter.jsx';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import Modal from './Components/Modal/Modal.jsx';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    window.addEventListener('keydown', this.idEscapeEvent);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentWillUnmount() {}

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
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
    this.toggleModal();
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
        <div className={styles.phonebook}>
          <div>
            <h2 className={styles.titleMain}>Phonebook</h2>
            <button
              type="button"
              className={styles.addBtn}
              onClick={this.toggleModal}
            >
              Add Contact
            </button>
          </div>
          {/* <ContactForm onSubmitForm={this.onSubmitForm} /> */}
          <div>
            <Filter
              filterValue={this.state.filter}
              onFilterChange={this.hendleOnchange}
            />
            <h2 className={styles.title}>Contacts</h2>
            <ul className={styles.itemList}>
              <ContactList
                contItems={this.state.contacts}
                filteredValue={this.state.filter}
                deleteHandler={this.deleteHandler}
              />
            </ul>
          </div>
        </div>
        {this.state.showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <ContactForm onSubmitForm={this.onSubmitForm} />
            <button
              type="button"
              className={styles.btn}
              onClick={this.toggleModal}
            >
              X
            </button>
          </Modal>
        )}
      </div>
    );
  }
}
export default App;

// App.propTypes = {};
