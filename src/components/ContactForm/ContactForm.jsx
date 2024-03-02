import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { addContacts } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

const usernameInputId = nanoid();
const usertelInputId = nanoid();

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const contactExist = contacts.some(contact => contact.name === name);
    if (contactExist) {
      alert('Contact already exist!');
      form.reset();
    } else {
      dispatch(addContacts({ name, phone }));
      form.reset();
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className={css.contact_container}>
          <label htmlFor={usernameInputId} className={css.username_label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id={usernameInputId}
            className={css.username_input}
            placeholder="Please write username"
            pattern="[a-zA-Z \-']{2,30}"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor={usertelInputId} className={css.usertel_label}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            id={usertelInputId}
            className={css.usertel_input}
            placeholder="Please write number"
            pattern="^\+?[0-9 \-\(\)]{7,20}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button type="submit" className={css.add_button}>
            Add contact
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
