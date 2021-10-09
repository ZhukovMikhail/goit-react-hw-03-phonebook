import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleOnchange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };
  onSubmitContacts = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.name, this.state.number);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form className={styles.formContact} onSubmit={this.onSubmitContacts}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.hendleOnchange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.hendleOnchange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={styles.itemBtn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  input: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ContactForm;
